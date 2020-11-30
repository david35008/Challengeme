require('dotenv').config();
const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, RefreshToken } = require('../../models');
const checkToken = require('../../middleware/checkToken');
const checkAdmin = require('../../middleware/checkAdmin');
const {
  loginValidation,
  registerValidation,
  tokenValidation,
  pwdUpdateValidation,
  answerValidation,
  userValidation,
} = require('../../helpers/validator');
const mailer = require('../../helpers/communicator');

// Register
authRouter.post('/register', async (req, res) => {
  try {
    // Joi validation
    const { error } = registerValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    // if user name already exist return error
    const checkUser = await userIsExist(req.body.userName);

    if (checkUser) return res.status(409).send('user name already exists');

    const hashPassword = await bcrypt.hashSync(req.body.password, 10);
    const hashsecurityAnswer = await bcrypt.hashSync(req.body.securityAnswer, 10);
    const newUser = {
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashPassword,
      email: req.body.email,
      birthDate: req.body.birthDate,
      country: req.body.country,
      city: req.body.city,
      phoneNumber: req.body.phoneNumber,
      githubAccount: req.body.githubAccount,
      reasonOfRegistration: req.body.reasonOfRegistration,
      securityQuestion: req.body.securityQuestion,
      securityAnswer: hashsecurityAnswer,
    };
    const mailedToken = jwt.sign(newUser, process.env.EMAIL_TOKEN_SECRET);
    mailer.sendHTMLMail(
      req.body.email,
      'Validate your E-mail',
      `<p>
  Conregulation Challenger, and welcome! You are now offically a part of challenge me
  community! To start challenging your friends and undertake challenges
  yourself, click on the buttom bellow.
</p>
<form action="${process.env.IP_ADDRESS}/auth">
<input name="token" value="${mailedToken}" type="hidden">
  <button style="width: 200px; background-color: purple; color: white;">Get Schwifty</button>
</form>`,
      (error, info) => {
        if (error) {
          console.error(error.message);
          res.status(400).json({ message: 'Email Invalid' });
        } else {
          console.log(info);
          res.json({ message: 'Waiting For Mail Validation' });
        }
      },
    );
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// Create User
authRouter.post('/create-user', (req, res) => {
  try {
    const { error } = tokenValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    jwt.verify(
      req.body.token,
      process.env.EMAIL_TOKEN_SECRET,
      async (error, decoded) => {
        if (error) {
          console.error(error.message);
          return res.status(403).json({ message: 'Invalid Token' });
        }
        delete decoded.iat;
        delete decoded.exp;

        const checkUser = await userIsExist(decoded.userName);
        if (checkUser) return res.status(409).send('user name already exists');
        await User.create(decoded);
        res.status(201).json({ message: 'Register Success' });
      },
    );
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// Check if user exist
authRouter.post('/user-exist', async (req, res) => {
  try {
    // User Validation
    const { error } = userValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const currentUser = await userIsExist(req.body.userName);
    if (currentUser) return res.status(409).json({ message: 'user name already exists' });
    res.json({ notExist: true });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// Validate Token
authRouter.get('/validate-token', checkToken, (req, res) => {
  res.json({ valid: true });
});

// Log In
authRouter.post('/login', async (req, res) => {
  try {
    // Joi Validation
    const { error } = loginValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const currentUser = await userIsExist(req.body.userName);
    if (!currentUser) return res.status(403).json({ message: 'User or Password are incorrect' });
    const validPass = await bcrypt.compareSync(
      req.body.password,
      currentUser.password,
    );
    if (!validPass) return res.status(403).json({ message: 'User or Password incorrect' });
    const expired = req.body.rememberMe ? '365 days' : '24h';
    const infoForCookie = {
      userId: currentUser.id,
      userName: currentUser.userName,
    };
    const refreshToken = jwt.sign(
      infoForCookie,
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: expired,
      },
    );
    const accessToken = generateToken(infoForCookie);
    const isTokenExist = await RefreshToken.findOne({
      where: {
        userName: currentUser.userName,
      },
    });
    if (!isTokenExist) {
      await RefreshToken.create({
        userName: currentUser.userName,
        token: refreshToken,
      });
    } else {
      await RefreshToken.update(
        { token: refreshToken },
        {
          where: {
            userName: currentUser.userName,
          },
        },
      );
    }
    res.cookie('name', currentUser.firstName);
    res.cookie('userName', currentUser.userName);
    res.cookie('accessToken', accessToken);
    res.cookie('refreshToken', refreshToken);
    res.cookie('isAdmin', currentUser.permission);
    res.json({ userDetails: currentUser });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// Get new access token
authRouter.post('/token', async (req, res) => {
  try {
    // Joi Validation
    const { error } = tokenValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const refreshToken = req.body.token;
    const validRefreshToken = await RefreshToken.findOne({
      where: {
        token: refreshToken,
      },
    });
    if (!validRefreshToken) return res.status(403).json({ message: 'Invalid Refresh Token' });
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        console.error(error.message);
        return res.status(403).json({ message: 'Invalid Refresh Token' });
      }
      delete decoded.iat;
      delete decoded.exp;
      const accessToken = generateToken(decoded);
      res.cookie('accessToken', accessToken);
      res.json({ message: 'token updated' });
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// Logout request
authRouter.post('/logout', async (req, res) => {
  try {
    // Joi Validation
    const { error } = tokenValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const result = await RefreshToken.destroy({
      where: {
        token: req.body.token,
      },
    });
    if (!result) return res.status(400).json({ message: 'Refresh Token is required' });
    res.json({ message: 'User Logged Out Successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// Geting Sequrity Question
authRouter.post('/get-question', async (req, res) => {
  try {
    const { error } = userValidation(req.body);
    if (error) {
      console.error(error.message);
      res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const currentUser = await userIsExist(req.body.userName);
    if (!currentUser) {
      return res.json({
        securityQuestion:
          'What is the name, breed, and color of your favorite pet?',
      });
    }
    res.json({ securityQuestion: currentUser.securityQuestion });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// Validate Answer
authRouter.post('/validate-answer', async (req, res) => {
  try {
    // Joi Validation
    const { error } = answerValidation(req.body);
    if (error) {
      console.error(error.message);
      res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const currentUser = await userIsExist(req.body.userName);
    if (!currentUser) return res.status(403).json({ message: 'Wrong Answer' });
    const validAnswer = await bcrypt.compareSync(
      req.body.securityAnswer,
      currentUser.securityAnswer,
    );
    if (!validAnswer) return res.status(403).json({ message: 'Wrong Answer' });
    const resetToken = jwt.sign(currentUser, process.env.RESET_PASSWORD_TOKEN, {
      expiresIn: '300s',
    });
    res.json({ resetToken });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// Password Update
authRouter.patch('/password-update', async (req, res) => {
  try {
    // Joi Valodation
    const { error } = pwdUpdateValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const { resetToken } = req.body;
    jwt.verify(
      resetToken,
      process.env.RESET_PASSWORD_TOKEN,
      async (error, decoded) => {
        if (error) return res.status(403).json({ message: 'Invalid Token' });
        const hashPassword = await bcrypt.hashSync(req.body.password, 10);
        await User.update(
          { password: hashPassword },
          {
            where: {
              userName: decoded.userName,
            },
          },
        );
        res.json({ message: 'Changed Password Sucsessfuly' });
      },
    );
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// validate if user has admin permission
authRouter.get('/validate-admin', checkToken, checkAdmin, (req, res) => {
  res.json({ admin: true });
});

// check in the DateBase if user is in the system
async function userIsExist(userName) {
  try {
    const user = await User.findOne({
      where: {
        userName,
      },
    });
    if (user) {
      return user.dataValues;
    }
    return false;
  } catch (error) {
    console.error(error.message);
  }
}

// create an access token
function generateToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '900s' });
}

module.exports = authRouter;

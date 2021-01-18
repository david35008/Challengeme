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
const githubAuth = require('../../middleware/githubAuth');
const { generatePassword } = require('../../utils');

// get client id for authentication with github
authRouter.get('/client-id-github', (req, res) => {
  res.json({ clientId: process.env.GITHUB_CLIENT_ID })
});

// authentication with github
authRouter.post('/authentication-with-github', githubAuth, async (req, res) => {
  const { login, name, email, id, node_id } = req.gitUser;
  try {
    const userName = login + 'github';
    const checkUser = await userIsExist(userName);
    if (checkUser) {
      await giveCredentials(res, checkUser.userName, checkUser.id, rememberMe = false, withRefresh = true);
      const isAdmin = checkUser.permission === 'admin';
      return res.json({ userName: checkUser.userName, isAdmin, title: 'Login With Github Success' });
    } else {
      const splitName = name ? name.split(' ') : [];
      const password = generatePassword()
      const hashPassword = await bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        userName,
        firstName: splitName[0],
        lastName: splitName[1],
        email,
        password: hashPassword,
        githubAccount: login
      });
      await giveCredentials(res, newUser.userName, newUser.id, rememberMe = false, withRefresh = true);
      return res.status(201).json({
        userName: newUser.userName,
        isAdmin: false,
        title: 'Register With Github Success',
        message: `This is your regular login password ${password}, Please save it somewhere safe for your next login`
      });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
  }
});

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
    return mailer.sendHTMLMail(
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
          return res.status(400).json({ message: 'Email Invalid' });
        }
        console.log(info);
        return res.json({ message: 'Waiting For Mail Validation' });
      },
    );
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
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
    return jwt.verify(req.body.token, process.env.EMAIL_TOKEN_SECRET, async (error, decoded) => {
      if (error) {
        console.error(error.message);
        return res.status(403).json({ message: 'Invalid Token' });
      }
      delete decoded.iat;
      delete decoded.exp;

      const checkUser = await userIsExist(decoded.userName);
      if (checkUser) return res.status(409).send('user name already exists');
      await User.create(decoded);
      return res.status(201).json({ message: 'Register Success' });
    });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
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
    return res.json({ notExist: true });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
  }
});

// Validate Token
authRouter.get('/validate-token', checkToken, async (req, res) => {
  const isAdmin = await userIsAdmin(req.user.userName);
  return res.json({ valid: true, isAdmin });
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
    await giveCredentials(res, currentUser.userName, currentUser.id, req.body.rememberMe, withRefresh = true)
    const isAdmin = currentUser.permission === 'admin';
    return res.json({ userName: currentUser.userName, isAdmin });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
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
    return await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (error, decoded) => {
      if (error) {
        console.error(error.message);
        return res.status(403).json({ message: 'Invalid Refresh Token' });
      }
      await giveCredentials(res, decoded.userName, decoded.userId, rememberMe = false, withRefresh = false)
      const isAdmin = await userIsAdmin(decoded.userName);
      return res.json({ message: 'token updated', isAdmin });
    });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
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
    return res.json({ message: 'User Logged Out Successfully' });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
  }
});

// Getting Security Question
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
    return res.json({ securityQuestion: currentUser.securityQuestion });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
  }
});

// Validate Answer
authRouter.post('/validate-answer', async (req, res) => {
  try {
    // Joi Validation
    const { error } = answerValidation(req.body);
    if (error) {
      console.error(error.message);
      return res.status(400).json({ success: false, message: "Don't mess with me" });
    }
    const currentUser = await userIsExist(req.body.userName);
    if (!currentUser) return res.status(403).json({ message: 'Wrong Answer' });
    if(!currentUser.securityAnswer) return res.status(403).json({ message: 'Wrong Answer' });
    const validAnswer = await bcrypt.compareSync(
      req.body.securityAnswer,
      currentUser.securityAnswer,
    );
    if (!validAnswer) return res.status(403).json({ message: 'Wrong Answer' });
    const resetToken = jwt.sign(currentUser, process.env.RESET_PASSWORD_TOKEN, {
      expiresIn: '300s',
    });
    return res.json({ resetToken });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
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
    return jwt.verify(
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
        return res.json({ message: 'Changed Password Successfully' });
      },
    );
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ message: 'Cannot process request' });
  }
});

// validate if user has admin permission
authRouter.get('/validate-admin', checkToken, checkAdmin, (req, res) => res.json({ admin: true }));

// check in the DateBase if user is in the system
async function userIsExist(userName) {
  try {
    const user = await User.findOne({
      where: {
        userName,
      },
    });
    if (user) {
      return user.toJSON();
    }
    return false;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

// check in the DateBase if user is an admin on the system
async function userIsAdmin(userName) {
  try {
    const userIsAdmin = await User.findOne({
      where: {
        userName,
        permission: 'admin',
      },
      attributes: ['userName'],
    });
    if (userIsAdmin) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

// create an access token
function generateAccessToken(userName, userId) {
  return jwt.sign({ userName, userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '900s' });
}

// create an refresh token
async function generateRefreshToken(userName, userId, rememberMe) {
  try {
    const isTokenExist = await RefreshToken.findOne({
      where: {
        userName
      },
    });
    const expired = rememberMe ? '365 days' : '24h';
    const refreshToken = jwt.sign({ userId, userName },
      process.env.REFRESH_TOKEN_SECRET, { expiresIn: expired });
    if (!isTokenExist) {

      await RefreshToken.create({
        userName,
        token: refreshToken,
      });
    } else {
      await RefreshToken.update(
        { token: refreshToken },
        {
          where: {
            userName,
          },
        },
      );
    }
    return refreshToken;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

// generate access and refresh tokens and set cookies 
async function giveCredentials(res, userName, userId, rememberMe, withRefresh) {
  const accessToken = generateAccessToken(userName, userId);
  if (withRefresh) {
    const refreshToken = await generateRefreshToken(userName, userId, rememberMe)
    res.cookie('refreshToken', refreshToken);
  }
  res.cookie('userName', userName);
  res.cookie('accessToken', accessToken);
  return;
}

module.exports = authRouter;

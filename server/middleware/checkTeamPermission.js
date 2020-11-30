const { User, Team } = require('../models');

async function checkIfUserIsAdmin(user) {
  return await User.findOne({
    where: {
      userName: user,
      permission: 'admin',
    },
  });
}

async function checkTeamPermission(req, res, next) {
  const { teamId } = req.params;
  const { userId } = req.user;
  try {
    const userTeam = await User.findOne({
      attributes: [],
      where: {
        id: userId,
      },
      include: [
        {
          model: Team,
          attributes: ['id', 'name'],
          where: {
            id: teamId,
          },
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (userTeam) {
      next();
    } else if (await checkIfUserIsAdmin(req.user.userName)) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
}

async function checkTeacherPermission(req, res, next) {
  const { teamId } = req.params;
  const { userId } = req.user;
  try {
    const userTeam = await User.findOne({
      attributes: ['id'],
      where: {
        id: userId,
      },
      include: [
        {
          model: Team,
          attributes: ['id'],
          where: {
            id: teamId,
          },
          through: {
            attributes: ['permission'],
          },
        },
      ],
    });

    if (userTeam) {
      if (userTeam.dataValues.Teams[0].dataValues.UserTeam.dataValues.permission === 'teacher') {
        next();
      } else if (await checkIfUserIsAdmin(req.user.userName)) {
        next();
      } else {
        res.sendStatus(401);
      }
    } else if (await checkIfUserIsAdmin(req.user.userName)) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
}

module.exports = {
  checkTeacherPermission, checkTeamPermission,
};

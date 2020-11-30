const typeRouter = require('express').Router();
const fs = require('fs');

// router Get - github/workflows
typeRouter.get('/', async (req, res) => {
  try {
    const files = fs.readdirSync('../.github/workflows');
    let types = files.map((file) => (!file.includes('deploy')
      ? file.slice(0, -4)
      : null));
    types = types.filter((type) => type !== null);
    types = types.map((file) => (!file.includes('Continuous')
      ? file
      : null));
    types = types.filter((type) => type !== null);
    res.json(types);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

module.exports = typeRouter;

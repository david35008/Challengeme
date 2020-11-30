const webhookRouter = require('express').Router();
const { Submission } = require('../../models');

// github api for update status about submission
webhookRouter.patch('/submission/:id', async (req, res) => {
  try {
    const { success } = req.body;
    const submission = await Submission.findByPk(req.params.id);
    await submission.update({ state: success ? 'SUCCESS' : 'FAIL' });
    res.json(submission);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

module.exports = webhookRouter;

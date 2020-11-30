const reviewsRouter = require('express').Router();
const checkAdmin = require('../../middleware/checkAdmin');
const { Review, User } = require('../../models');

// get reviews by challenge with params
reviewsRouter.get('/:challengeId', async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { challengeId: req.params.challengeId },
      include: {
        model: User,
        attributes: ['userName'],
      },
    });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

// add review to challenge
reviewsRouter.post('/:challengeId', async (req, res) => {
  const { title, content, rating } = req.body;
  const { userId } = req.user;
  const query = {
    title,
    content,
    rating,
    userId,
    challengeId: req.params.challengeId,
  };
  try {
    await Review.create(query);
    res.status(201).json({ message: 'Uploaded new review!' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

//= ============================= Admin Routes ======================================

// delete review from challenge
reviewsRouter.delete('/:reviewId', checkAdmin, async (req, res) => {
  const { reviewId } = req.params;
  try {
    await Review.destroy({
      where: {
        id: reviewId,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

module.exports = reviewsRouter;

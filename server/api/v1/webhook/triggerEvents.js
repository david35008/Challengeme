const triggerEventsRouter = require('express').Router();
const webhookSendEvents = require('../../../helpers/webhookSendEvents');
const { webhookUrlEventTriggerValidation } = require('../../../helpers/validator');
// github api for update status about submission
triggerEventsRouter.post('/start-challenge', async (req, res) => {
    try {
        // Joi validation
        const { error } = webhookUrlEventTriggerValidation(req.body);
        if (error) {
            console.error(error.message);
            return res.status(400).json({ success: false, message: error.message });
        }
        const { challengeName } = req.body;
        const eventToSend = {
            eventName: 'startedChallenge',
            userId: req.user.userId,
            userName: req.user.userName,
            challengeName: challengeName,
            createdAt: Date.now()
        }
        webhookSendEvents(eventToSend)
        res.sendStatus(200)
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

module.exports = triggerEventsRouter;

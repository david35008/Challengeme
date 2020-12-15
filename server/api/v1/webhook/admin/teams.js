const teamsAdminWebhookRouter = require('express').Router();
const { WebhookTeam, WebhookEvent, WebhookEventTeam } = require('../../../../models');

// get all webhook teams on our system
teamsAdminWebhookRouter.get('/', async (req, res) => {
    let where = req.query.id ? { teamId: req.query.id } : {};
    try {
        const allWebhookTeams = await WebhookTeam.findAll({
            where,
            include: {
                model: WebhookEvent,
                through: {
                    attributes: []
                }
            }
        });
        res.json(allWebhookTeams);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

// add webhook team
teamsAdminWebhookRouter.post('/', async (req, res) => {
    const { teamId, webhookUrl, authorizationToken, events } = req.body
    try {
        const eventsIds = await WebhookEvent.findAll({
            where: {
                name: events
            }
        });

        const newWebhookTeam = await WebhookTeam.create({ teamId, webhookUrl, authorizationToken });
        const teamEvents = events.map(event => {
            return {
                webhookId: newWebhookTeam.id,
                eventId: eventsIds.find(eventName => event === eventName.name).id
            }
        })

        await WebhookEventTeam.bulkCreate(teamEvents)
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

// update webhook team
teamsAdminWebhookRouter.patch('/:id', async (req, res) => {
    const { webhookUrl, authorizationToken } = req.body
    const { id } = req.params;
    try {
        await WebhookTeam.update({ webhookUrl, authorizationToken }, {
            where: {
                id
            },
        });
        const allTeamsKeys = await WebhookTeam.findAll({});
        res.json(allTeamsKeys);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

// delete webhook team
teamsAdminWebhookRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await WebhookTeam.destroy({
            where: {
                id,
            },
            truncate: true
        });
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Cannot process request' });
    }
});

module.exports = teamsAdminWebhookRouter;

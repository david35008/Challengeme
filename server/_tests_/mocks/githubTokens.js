module.exports = [
  {
    id: 1,
    token: 'abcdefghijklmnopqrstuvwxyz1234567890',
    status: 'available',
    resetsAt: Date.now() + 60 * 60 * 1000,
    gitAccount: 'royTheKing',
    actionsLimit: 5000,
  },
  {
    id: 2,
    token: '1234567890abcdefghijklmnopqrstuvwxyz',
    status: 'available',
    resetsAt: Date.now() + 60 * 60 * 1000,
    gitAccount: 'boosty123',
    actionsLimit: 5000,
  },
  {
    id: 3,
    token: '1234567890abcdefghijklmnopqrstuvwxyz1234567890',
    status: 'available',
    resetsAt: Date.now() + 60 * 60 * 1000,
    gitAccount: 'regularUser',
    actionsLimit: 5000,
  },
];

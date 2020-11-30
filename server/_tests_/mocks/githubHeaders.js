module.exports = [
  {
    'x-ratelimit-reset': Date.now().valueOf() / 1000 + 1 * 60 * 60,
    'x-ratelimit-limit': 5000,
    'x-ratelimit-remaining': 501,
    'x-ratelimit-used': 4499,
  },
  {
    'x-ratelimit-reset': Date.now().valueOf() / 1000 + 3,
    'x-ratelimit-limit': 5000,
    'x-ratelimit-remaining': 499,
    'x-ratelimit-used': 4501,
  },
  {
    'x-ratelimit-reset': Date.now().valueOf() / 1000 + 100,
    'x-ratelimit-limit': 5000,
    'x-ratelimit-remaining': 499,
    'x-ratelimit-used': 4501,
  },
];

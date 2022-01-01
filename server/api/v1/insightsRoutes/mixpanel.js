const mixpanelRoute = require('express').Router();
const axios = require('axios');
const checkAdmin = require('../../../middleware/checkAdmin');
const { validDateNum } = require('../../../utils');

const cachedEvents = {};

function queryDiff(presentQuery, cachedQuery) {
  if (presentQuery.from != cachedQuery.from) return false;
  if (presentQuery.to != cachedQuery.to) return false;
  if (!(parseInt(presentQuery.limit) <= parseInt(cachedQuery.limit))) return false;
  return true;
}

function isAlreadyCached(event, query) {
  const cached = cachedEvents[event];
  if (!cached) return false;
  if (cached.lastCached < (Date.now() - (1000 * 60 * 60 * 24))) return false;
  if (!queryDiff(query, cached.query)) return false;
  const cloneData = JSON.parse(JSON.stringify(cached));
  cloneData.data.length = parseInt(query.limit);
  return cloneData;
}

function manipulateRowData(string) {
  const regex = /}}/ig;
  const commaEndOfObjects = string.replace(regex, '}},');
  const lastCommaToRemove = commaEndOfObjects.lastIndexOf('}},') + 2;
  const removeLastComma = commaEndOfObjects.slice(0, lastCommaToRemove) + commaEndOfObjects.slice(lastCommaToRemove + 1);
  const onlySingleQuotes = removeLastComma.replace(/'/g, '"');
  const noDoubleComa = onlySingleQuotes.replace(/,,/g, ',');
  const noComaInTheMidel = noDoubleComa.replace(/},}/g, '}}');
  const insideArray = `[${noComaInTheMidel}]`;
  const parsedEvents = JSON.parse(insideArray);
  return parsedEvents;
}

function jsonlParser(jsonl) {
  return jsonl
    .split("\n")
    .filter(function (s) { return s !== ""; })
    .map(function (str) { return JSON.parse(str); });
};

function manipulateEvents(array) {
  if (Array.isArray(array)) {
    return array.map((event) => {
      event.properties.id = event.properties.$insert_id;
      event.properties.time = new Date(event.properties.time * 1000).toString();
      event.properties.event_name = event.event
      return event.properties;
    });
  }
  return null;
}

// get all team users start challenge time of the last month
// on development just team 3 have started events (suvelocity user)
mixpanelRoute.get('/', checkAdmin, async (req, res) => {
  const {
    from, to, event, limit, userName
  } = req.query;
  try {
    const fromDate = validDateNum(from);
    const toDate = validDateNum(to);
    const formattedFrom = new Date(fromDate).toISOString().slice(0, 10);
    const formattedTo = new Date(toDate).toISOString().slice(0, 10);
    const verifiedLimit = parseInt(limit) >= 2 ? parseInt(limit) : '';
    let query = `?to_date=${formattedTo}&from_date=${formattedFrom}&limit=${verifiedLimit}`
    if (event !== 'All Events') {
      const encodedEvent = encodeURIComponent(`["${event}"]`);
      query += `&event=${encodedEvent}`
      const eventsExist = isAlreadyCached(event, req.query);
      if (eventsExist) {
        return res.json(eventsExist.data);
      }
    }
    if (userName) {
      const encodedUser = encodeURIComponent(`properties["User"] in ["${userName}"]`)
      query += `&where=${encodedUser}`
    }
    console.log('Mixpanel query = ', query);
    // the mixpanel return string !!
    const response = await axios.get(
      `https://data.mixpanel.com/api/2.0/export${query}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.MIXPANEL_SECRET}`,
        },
      },
    );

    // const eventsArray = manipulateRowData(response.data);    
    const eventsArray = jsonlParser(response.data)
    const results = manipulateEvents(eventsArray);
    if (results && Array.isArray(results) && results.length) {
      cachedEvents[event] = { data: results, lastCached: Date.now(), query: req.query };
    }
    res.json(results);
  } catch (error) {
    console.error(error.response ? error.response.data ? error.response.data : error.message : error);
    res.status(400).json({ message: 'Cannot process request' });
  }
});

module.exports = mixpanelRoute;

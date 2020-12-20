const insightMixpanelRoute = require("express").Router();
const {
  checkTeacherPermission,
  checkTeamPermission,
} = require("../../../middleware/checkTeamPermission");
const { getTeamUsersNames } = require("./getTeamUsers");
const axios = require("axios");

// get all team users start challenge time of the last month
// on development just team 3 have started events (suvelocity user)
insightMixpanelRoute.get(
  "/started-challenge/:teamId",
    checkTeamPermission,
    checkTeacherPermission,
  async (req, res) => {
    try {
      const usersNames = await getTeamUsersNames(req.params.teamId);
      todayDate = new Date().toISOString().slice(0,10);
      oneMonth = 30 * 24 * 60 * 60 * 1000;
      oneMonthAgoDate = new Date(Date.now() - oneMonth).toISOString().slice(0,10);
      // the mixpanel return string !!
      const { data } = await axios.get(
        `https://data.mixpanel.com/api/2.0/export?to_date=${todayDate}&from_date=${oneMonthAgoDate}&event=%5B%22User%20Started%20Challenge%22%5D`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic MGI1YzUyOGE2MTQxNGExMWQwMTgwODc1MDEwYTlkYzM6",
          },
        }
      );

      console.log("users", usersNames);

      // orginized the string to arrays 
      dataObjects = data.split("}");
      dataStrings = dataObjects.map((str) => str.split(","));

      // find the relevant data and push it to array of objects
      let result = [];
      dataStrings.forEach((arr) => {
        let challengeId; 
        arr.forEach((str) => {
          let obj = {};
          if(str.includes("ChallengeId")){
            challengeId = str.split(':')[1].split('\"')[1];
          }
          usersNames.forEach((user) => {
            if (str && str.includes(user)) {
              obj.userName = user;
              obj.time = arr[1].slice(-10);
              obj.challengeId = challengeId
              result.push(obj)
            }
          });
        });
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Cannot process request" });
    }
  }
);

module.exports = insightMixpanelRoute;

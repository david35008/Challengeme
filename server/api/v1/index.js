const { Router } = require("express");
const checkToken = require("../../middleware/checkToken");
const router = Router();

router.use("/auth", require("./auth"));
router.use("/webhook", checkToken, require("./webhook"));

router.use("/challenges", checkToken ,require("./challenges"));
router.use("/user_info", checkToken, require("./userInfo"));
router.use("/services", checkToken, require("./services"));
router.use("/image", checkToken, require("./image"));
router.use("/statistics", checkToken, require("./statisticsRoutes"));
router.use("/types", checkToken, require("./types"));
router.use("/labels", require("./labels"));
router.use("/reviews", checkToken, require("./reviews"));

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

router.use(unknownEndpoint);

module.exports = router;

/*
 * Import Module
 * ************* */
const express = require("express");
const router = express.Router();

const MessagesController = require("../controllers/MessagesController");
const EventController = require("../controllers/EventController");

router.route("/api/Contact").post(new MessagesController().create);

// Admin
router
  .route("/api/Admin/Events")
  .get(new EventController().getAll)
  .post(new EventController().create);

router
  .route("/api/Admin/Events/:id")
  .get(new EventController().getId)
  .put(new EventController().editOne)
  .delete(new EventController().deleteOne);
router.route("/api/Admin/Messages").get(new MessagesController().getAll);

router
  .route("/api/Admin/Messages/:id")
  .get(new MessagesController().getId)
  .delete(new MessagesController().deleteOne);

module.exports = router;

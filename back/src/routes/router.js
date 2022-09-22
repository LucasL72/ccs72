/*
 * Import Module
 * ************* */
const express = require("express");
const router = express.Router();
const upload = require("../config/Multer"),
  sharpArticles = require("../config/SharpArticles"),
  sharpAlbum = require("../config/SharpAlbum");

const MessagesController = require("../controllers/MessagesController");
const EventController = require("../controllers/EventController");
const ArticleControllers = require("../controllers/ArticleController");
const PicsController = require("../controllers/PicsController");
const UserController = require("../controllers/UserController");
const TokenJWT = require("../middlewares/Token_jwt");
//-------------Login-----------------
router.route("/api/login").post(new UserController().login);
router
  .route("/api/auth/:token")
  .get(new TokenJWT().checkIsValid, new UserController().checkToken);

router.route("/api/").post(new UserController().create);

// ----------------- ALL---------------
router.route("/api/Actu").get(new ArticleControllers().getNews);
router.route("/api/Contact").post(new MessagesController().create);

router.route("/api/Blog").get(new ArticleControllers().getAll);

router.route("/api/Blog/:id").get(new ArticleControllers().getId);
router.route("/api/Photos").get(new PicsController().getAll);

// -----------------Admin--------------------
router
  .route("/api/Admin/Blog")
  .get(new ArticleControllers().getAll)
  .post(upload.single("image"), sharpArticles, new ArticleControllers().create);

router
  .route("/api/Admin/Blog/:id")
  .get(new ArticleControllers().getId)
  .delete(new ArticleControllers().deleteOne);

router
  .route("/api/Admin/Photos")
  .get(new PicsController().getAll)
  .post(upload.single("image"), sharpAlbum, new PicsController().create);

router
  .route("/api/Admin/Photos/:id")
  .get(new PicsController().getId)
  .delete(new PicsController().deleteOne);
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

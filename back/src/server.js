const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
const helmet = require("helmet");
//const path = require("path");

class Server {
  constructor(app, port) {
    this.app = app;
    this.port = port;
  }

  run() {
    // Cors
    this.app.use(
      cors({
        origin: [
          "http://localhost:3000",
          "https://www.charpente72.fr",
          "https://charpente72.fr",
          "http://www.charpente72.fr",
          "http://charpente72.fr",
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );
    // Disable header express default
    this.app.disable("x-powered-by");

    // this.app.use(helmet())
    // hidePoweredBy() => disable("x-powered-by")
    this.app.use(helmet.hidePoweredBy());
    // contentSecurityPolicy() => Cela aide à prévenir les attaques de scripts intersites
    this.app.use(helmet.contentSecurityPolicy());
    // Body Parser
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: false,
      })
    );

    // Express static permet de diriger un chemin sur un dossier en particulier
    this.app.use("/api/assets", express.static("public"));
    // Routes
    this.app.use(router);
    // Run app
    return this.app.listen(this.port, () => {
      try {
        console.log(`server is running on ${this.port} ...🚀`);
      } catch (error) {
        throw error;
      }
    });
  }
}

module.exports = Server;

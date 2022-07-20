const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserController {
  async getAll(req, res) {
    try {
      User.getAll((err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create User Success !",
            dbUsers: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async create(req, res) {
    const {email, password,confirm } =
      req.body;
    
    let newUser = new User({
      email: String(email),
      password: String(password),
      confirm: String(confirm),
    });
    try {
      User.create(newUser, (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.send({
            status: "success",
            flash: "Create user Success !",
            dbUsers: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }

  

  async getId(req, res) {
    try {
      User.getById(String(req.params.id), (err, data) => {
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create user Success !",
            dbUsers: data,
          });
        }
      });
    } catch (error) {
      throw error;
    }
  }



  async login(req, res) {
    try {
      User.login({ ...req.body }, (err, data) => {
        // 1234
        if (err) {
          console.log("err", err),
            res.status(500).send({
              message: err.message || "Une erreur est survenue",
            });
        } else {
          let token = "visitor";
          if (data.isVerified === 1) {
            token = jwt.sign(
              {
                id: data.id,
                email: data.email,
                isAdmin: data.isAdmin,
                isVerified: data.isVerified,
              },
              process.env.SIGN_JWT,
              { expiresIn: "1h" }
            );

            return res.status(200).send({
              success: "success",
              flash: "Login Success!",
              token,
            });
          } else
            return res.status(202).send({
              success: "no",
              flash: data,
              token: "no",
            });
        }
      });
    } catch (error) {
      throw error;
    }
  }
  async checkToken(req, res) {
    const user = jwt.verify(
      req.params.token,
      process.env.SIGN_JWT,
      (err, decoded) => {
        if (err) return;
        return decoded;
      }
    );
    try {
      // JWT
      return res.send({
        method: req.method,
        status: "success",
        flash: "Login Auth Success !",
        user: {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin,
          isVerified: user.isVerified,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
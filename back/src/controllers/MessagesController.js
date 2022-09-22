const Message = require("../models/MessagesModel");
const nodemailer = require("../config/nodemailer");
require("isomorphic-fetch");
class MessagesController {
  async getAll(req, res) {
    try {
      const newMessage = new Message({});
      newMessage
        .getAll()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Create Event Success !",
            dbMessages: data,
          });
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      throw error;
    }
  }

  async create(req, res) {
    const { produit, nom, prenom, email, tel, adresse, content, token } =
      req.body;

    let newMessage = new Message({
      produit: produit,
      nom: nom,
      prenom: prenom,
      email: email,
      tel: tel,
      adresse: adresse,
      content: content,
    });

    try {
      nodemailer.SendMessage(req, res),
        newMessage
          .create()
          .then((data) => {
            return res.send({
              method: req.method,
              status: "success",
              flash: "Create Message Success !",
              dbMessages: data,
            });
          })
          .catch((err) => console.log("error", err));
    } catch (error) {
      throw error;
    }
    const isHuman = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `secret=${process.env.REACT_APP_PRIVATE}&response=${token}`,
      }
    )
      .then((res) => res.json())
      .then((json) => json.success)
      .catch((err) => console.log("error", err));

    if (token == null || !isHuman) {
      throw error;
    } else {
      console.log("You are human");
    }
  }

  async getId(req, res) {
    let messObj = new Message({
      id: req.params.id,
      email: email,
      content: content,
      author: author,
    });
    try {
      messObj.getById().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "get message Success !",
          dbMessages: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteOne(req, res) {
    try {
      let messObj = new Message({
        id: req.params.id,
      });
      messObj.deleteOne().then((data) => {
        return res.send({
          method: req.method,
          status: "success",
          flash: "delete message Success !",
          dbMessages: data,
        });
      });
    } catch (error) {
      throw error;
    }
  }
}
module.exports = MessagesController;

/*
 *
 * Model de 'Event'
 ******************************/
const connection = require("../config/ConnectionDB");

class Message {
  constructor(messages) {
    (this.id = Number(messages.id)),
      (this.produit = String(messages.produit)),
      (this.nom = String(messages.nom)),
      (this.prenom = String(messages.prenom)),
      (this.email = String(messages.email)),
      (this.tel = Number(messages.tel)),
      (this.adresse = String(messages.adresse)),
      (this.content = String(messages.content));
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM messages`, (error, data) => {
          if (error) reject(error);
          console.log("model data", data);
          resolve(data);
          // Mettre fin à la connexion avec la db
          conn.release();
        });
      });
    });
  }

  getById() {
    const { id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
          `
          SELECT * FROM messages WHERE id = :id
      `,
          { id },
          (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          }
        );
      });
    });
  }

  create() {
    const { produit, nom, prenom, email, tel, adresse, content } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `
          INSERT INTO messages SET produit= :produit, nom= :nom, prenom= :prenom, email= :email, tel= :tel, adresse= :adresse, content= :content ;
      `,
          { produit, nom, prenom, email, tel, adresse, content },
          (error, data) => {
            if (error) reject(error);
            conn.query(`SELECT * FROM messages`, (error, data) => {
              if (error) reject(error);
              resolve(data);
              conn.release();
            });
          }
        );
      });
    });
  }

  deleteOne() {
    const { id } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(`DELETE FROM messages WHERE id = :id`, { id }, (d) => {
          if (error) reject(error);
          conn.query(`SELECT * FROM messages`, (error, data) => {
            if (error) reject(error);
            resolve(data);
            conn.release();
          });
        });
      });
    });
  }
}
module.exports = Message;

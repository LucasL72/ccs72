/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const help = require("../utils/help");

class Albums {
  constructor(photos) {
    (this.id = Number(photos.id)),
      (this.photo = String(photos.photo)),
      (this.authorname = String(photos.authorname)),
      (this.alt = String(photos.alt));
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(`SELECT * FROM pics`, (error, data) => {
          if (error) reject(error);
          resolve(data);
          // Mettre fin à la connexion avec la db
          conn.release();
        });
      });
    });
  }

  getById() {
    const { id} = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        if (error) throw error;
        conn.query(
          `
          SELECT photo,authorname,alt FROM pics WHERE id = :id
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
    const { photo, authorname,alt } = this;
    return new Promise((resolve, reject) => {
      connection.getConnection(function (error, conn) {
        conn.query(
          `INSERT INTO pics SET  photo=:photo,authorname= :authorname, alt= :alt;
      `,
          { photo, authorname,alt },
          (error, data) => {
            if (error) reject(error);
            conn.query(`SELECT photo,authorname FROM pics`, (error, data) => {
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
        conn.query(
          `SELECT photo
          FROM pics WHERE id = :id`,
          { id },
          (error, data) => {
            const name = data[0].photo;
            const dir = "./public/images/Album/";
            const image = dir + name;
            if (data[0].photo) help.removeFile(image);
            conn.query(`DELETE FROM pics WHERE id = ${id}`, (d) => {
              if (error) reject(error);
              conn.query(`SELECT * FROM pics`, (error, data) => {
                if (error) reject(error);
                resolve(data);
                conn.release();
              });
            });
          }
        );
      });
    });
  }
}

module.exports = Albums;
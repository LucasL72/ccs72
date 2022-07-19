/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const help = require("../utils/help");

const Article = function (articles) {
  (this.id = articles.id),
    (this.imgarticle = articles.imgarticle),
    (this.title = articles.title),
    (this.description = articles.description),
    (this.contenu = articles.contenu),
    (this.auteur = articles.auteur)
};

Article.getAll = function (result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT * FROM articles ORDER BY id DESC ;`, (error, data) => {
      if (error) throw error;
      result(null, data);
      // Mettre fin à la connexion avec la db
      conn.release();
    });
  });
};

Article.getNews = function (result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT * FROM articles ORDER BY dateart DESC LIMIT 3;`, (error, data) => {
      if (error) throw error;
      result(null, data);
      // Mettre fin à la connexion avec la db
      conn.release();
    });
  });
};

Article.getById = function (id, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `
          SELECT * FROM articles WHERE id = :id;
      `,
      { id },
      (error, data) => {
        if (error) throw error;
        result(null, data);
        conn.release();
      }
    );
  });
};

Article.create = function (newArticle, result) {
  const { imgarticle, title, description, contenu, auteur, id } =
    newArticle;
  connection.getConnection(function (error, conn) {
    conn.query(
      `INSERT INTO articles SET  imgarticle=:imgarticle,title= :title, description=:description,contenu= :contenu,auteur= :auteur ;
      `,
      { imgarticle, title, description, contenu, auteur },
      (error, data) => {
        if (error) throw error;
        conn.query(
          `SELECT * FROM articles where id= :id`,
          { id },
          (error, data) => {
            if (error) throw error;
            result(null, data[0]);
          }
        );
        conn.release();
      }
    );
  });
};


Article.deleteOne = function (id, result) {
  connection.getConnection(function (error, conn) {
    conn.query(
      `SELECT imgarticle
          FROM articles WHERE id = :id`,
      { id },
      (error, data) => {
        const name = data[0].imgarticle;
        const dir = "./public/images/Articles/";
        const image = dir + name;
        if (data[0].imgarticle) help.removeFile(image);
        conn.query(`DELETE FROM articles WHERE id = ${id}`, (data) => {
          if (error) throw error;
          conn.query(`SELECT * FROM articles`, (error, data) => {
            if (error) throw error;
            result(null, data);
            conn.release();
          });
        });
      }
    );
  });
};

module.exports = Article;
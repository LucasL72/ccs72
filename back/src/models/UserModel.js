/*
 *
 * Model de 'Article'
 ******************************/
const connection = require("../config/ConnectionDB");
const bcrypt = require("bcrypt");

const User = function (user) {
  (this.id = user.id),
    (this.email = user.email),
    (this.password = user.password),
    (this.confirm = user.confirm),
    (this.isAdmin = user.isAdmin),
    (this.isVerified = user.isVerified);
};

User.getAll = function (result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(`SELECT * FROM user`, (error, data) => {
      if (error) throw error;
      result(null, data);
      // Mettre fin à la connexion avec la db
      conn.release();
    });
  });
};

User.getById = function (id, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    conn.query(
      `
          SELECT * FROM user WHERE id = :id
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

User.create = function (newUser, result) {
  const {email, password, confirm} = newUser;
  const hash = bcrypt.hashSync(password, 10);
  const hash2 = bcrypt.hashSync(confirm, 10);
  connection.getConnection(function (error, conn) {
    conn.query(
      `
          INSERT INTO user SET email= :email, password= :hash, confirm= :hash2;
      `,
      {email, hash, hash2 },
      (error, data) => {
        if (error) throw error;
        conn.query(
          `SELECT * FROM user`,
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

User.login = function (user, result) {
  connection.getConnection(function (error, conn) {
    if (error) throw error;
    // check user if exist
    conn.query(
      `SELECT * FROM user where email = "${user.email}"`,
      (error, data) => {
        if (error) throw error;
        if (data.length <= 0) result(null, { message: "error" });
        // bcrypt (Compare hash.body with hash.db)
        else
          bcrypt.compare(
            user.password,
            data[0].password,
            function (err, check) {
              if (err) throw err;
              if (check) result(null, data[0]);
              else result(null, { message: "error" });
            }
          );
        conn.release();
      }
    );
  });
};

module.exports = User;

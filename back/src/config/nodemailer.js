// import nodemailer
const nodemailer = require("nodemailer");

require("dotenv").config();

// Déclaration du module de connection à notre Gmail (transporteur)
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL,
    pass: process.env.MDP_MAIL,
  },
});

var mailOptions;

module.exports = {
  SendMessage: (req, res) => {
    const mailOptions = {
      from: process.env.MAIL,
      to: process.env.MAIL_CCS,
      subject: "Message / Demande devis site charpente72.fr, " + req.body.produit,
      html: `
      <strong>Bonjour vous avez reçu un message de ${req.body.prenom} ${req.body.nom} depuis le site charpente72.fr </strong>
      <p> <strong>Sujet : </strong>  ${req.body.produit} </p>
      <p>  <strong>Nom : </strong>  ${req.body.nom} </p>
      <p> <strong>Prénom : </strong> ${req.body.prenom} </p>
      <p> <strong>Email : </strong>  ${req.body.email} </p>
      <p> <strong>Téléphone : </strong> ${req.body.tel} </p>
      <p> <strong>Adresse : </strong> ${req.body.adresse} </p>
          <p> <strong>Message : </strong> ${req.body.content}</p>
          <p>Bonne Journée</p>
        `,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("err", err),
          res.status(500).json({
            message: err.message || "Une erreur est survenue",
          });
      } else {
        res.json({
          method: req.method,
          status: "success",
          message: "Email SEND !!! ",
        });
      }
    });
  },
};

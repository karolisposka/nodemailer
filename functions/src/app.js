const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const { nodeMailerConfig } = require("./config");
const mailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());

console.log(nodeMailerConfig);

const sendEmail = async (email, text) => {
  let transporter = await mailer.createTransport({
    host: nodeMailerConfig.host,
    port: nodeMailerConfig.port,
    secure: true,
    auth: {
      user: nodeMailerConfig.user,
      pass: nodeMailerConfig.pass,
    },
  });

  let config = await transporter.sendMail({
    from: `"Pill" <${nodeMailerConfig.user}>`,
    to: email,
    subject: "Notification",
    text: text,
  });
  console.log(config);
};

app.post("/", async (req, res) => {
  try {
    if (req.body.email && req.body.text) {
      await sendEmail(req.body.email, req.body.text);
      return res.send({ msg: "email sent" });
    }
    return res
      .status(500)
      .send({ err: "something wrong with the server. Please try again later" });
  } catch (err) {
    res
      .status(500)
      .send({ err: "something wrong with the server. Please try again later" });
  }
});

exports.app = functions.https.onRequest(app);

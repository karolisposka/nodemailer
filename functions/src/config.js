require("dotenv").config();

module.exports = {
  port: process.env.SERVER_PORT,
  nodeMailerConfig: {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    pass: process.env.MAILER_PASSWORD,
    user: process.env.MAILER_USER,
  },
};

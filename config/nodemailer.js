import nodemailer from "nodemailer";

const email = "pixel.tech.t@gmail.com";
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: "abraham.turnsek@gmail.com",
};
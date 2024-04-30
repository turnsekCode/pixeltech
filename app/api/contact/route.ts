import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  
  let passValue = await new Response(req.body).text();
  let bodyreq = JSON.parse(passValue);
  const { name, email, subject, message } = bodyreq;

  // Configura el transporte de correo electrónico
  const transporter = nodemailer.createTransport({
    // Configura tu proveedor de correo electrónico aquí
    // Por ejemplo, puedes usar Gmail, Outlook, etc.
    service: 'Gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  try {
    // Envía el correo electrónico
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: subject,
      text: `Nombre: ${name}\nCorreo: ${email}\n Mensaje: ${message}`
    });

    return new Response('Correo enviado exitosamente', { status: 200 });
  } catch (error) {
    return new Response('Error al enviar el correo electrónico', { status: 500 });
  }
}
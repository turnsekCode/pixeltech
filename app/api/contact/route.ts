import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  
  let passValue = await new Response(req.body).text();
  let bodyreq = JSON.parse(passValue);
  const { name, email, subject, message } = bodyreq;


console.log("bodyconsole",email)
  // Configura el transporte de correo electrónico
  const transporter = nodemailer.createTransport({
    // Configura tu proveedor de correo electrónico aquí
    // Por ejemplo, puedes usar Gmail, Outlook, etc.
    service: 'Gmail',
    auth: {
      user: 'pixel.tech.t@gmail.com',
      pass: 'qlll zjkj mgvx jjld'
    }
  });

  try {
    // Envía el correo electrónico
    await transporter.sendMail({
      from: 'pixel.tech.t@gmail.com',
      to: "pixel.tech.t@gmail.com",
      subject: subject,
      text: `Nombre: ${name}\nCorreo: ${email}\n Mensaje: ${message}`
    });

    return new Response('Correo enviado exitosamente', { status: 200 });
  } catch (error) {
    return new Response('Error al enviar el correo electrónico', { status: 500 });
  }
}
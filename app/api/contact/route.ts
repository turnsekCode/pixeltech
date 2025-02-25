import { type NextRequest, NextResponse} from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest, res: NextResponse) {
  
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
  // Plantilla HTML para el correo electrónico
const emailHTML = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pixeltech.es</title>
    <style>
        /* Estilos para el cuerpo del correo */
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            padding: 20px;
        }
        
        /* Estilos para el contenedor principal */
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        /* Estilos para la cabecera */
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        
        /* Estilos para el logo */
        .logo {
            width: 200px;
            height: auto;
        }
        
        /* Estilos para el contenido */
        .content {
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        /* Estilos para el footer */
        .footer {
            text-align: center;
            color: #fff;
            background-color: #007bff;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://www.pixeltech.es/Logo-Pixeltech_logo-negro-color.png" alt="pixeltech.es" class="logo">
        </div>
        <div class="content">
            <h2>Correo Electrónico</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
        </div>
        <div class="footer">
            Correo enviado desde pixeltech
        </div>
    </div>
</body>
</html>
`;

  try {
    // Envía el correo electrónico
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: subject,
      html: emailHTML
    });

    return new Response('Correo enviado exitosamente', { status: 200 });
  } catch (error) {
    return new Response('Error al enviar el correo electrónico', { status: 500 });
  }
}
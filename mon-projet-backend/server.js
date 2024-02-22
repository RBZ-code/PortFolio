const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importez le module CORS

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.post('/send-email', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // Configurer le transporteur SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'outlook_668C5053DF5F63A0@outlook.com',
            pass: 'PortFolio2023'
        }
    });


    const mailOptions = {
        from: 'outlook_668C5053DF5F63A0@outlook.com',
        to: 'romainbezolles@gmail.com',
        subject: 'Nouveau message depuis votre site web',
        text: `
            Nom: ${lastName}
            Prénom: ${firstName}
            Email: ${email}
            Message: ${message}
        `
    };

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
            res.status(500).send('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
        } else {
            console.log('E-mail envoyé:', info.response);
            res.status(200).send('L\'e-mail a été envoyé avec succès.');
        }
    });
});

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});

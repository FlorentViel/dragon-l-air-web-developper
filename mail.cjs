require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Test de connexion SMTP au démarrage
async function verifyConnection() {
  try {
    await transporter.verify();
    console.log('Connexion SMTP réussie');
  } catch (error) {
    console.error('Erreur de connexion SMTP:', error);
  }
}

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true // Active les logs détaillés
});

// Route pour l'envoi d'email
app.post('/send-email', async (req, res) => {
  try {
    console.log('Requête reçue:', req.body);

    // Validation des données requises
    const { lastName, firstName, email, object, message } = req.body;
    if (!lastName || !email || !message) {
      return res.status(400).json({ 
        error: 'Données manquantes',
        details: 'Le nom, l\'email et le message sont requis'
      });
    }

    const mailOptions = {
      from: {
        name: `${lastName} ${firstName}`,
        address: email
      },
      to: {
        name: 'Florent Vieville',
        address: 'florent.vieville03@gmail.com'
      },
      subject: `Nouveau message de ${lastName} ${firstName}: ${object || 'Sans objet'}`,
      text: `
        Nom: ${lastName}
        Prénom: ${firstName || 'Non renseigné'}
        Email: ${email}
        Téléphone: ${req.body.phone || 'Non renseigné'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${lastName}</p>
        <p><strong>Prénom:</strong> ${firstName || 'Non renseigné'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${req.body.phone || 'Non renseigné'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    console.log('Tentative d\'envoi avec les options:', mailOptions);
    
    // Vérification de la connexion avant l'envoi
    await transporter.verify();
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès:', info);
    res.status(200).json({ message: 'Email envoyé avec succès', info });

  } catch (error) {
    console.error('Erreur détaillée lors de l\'envoi:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi de l\'email',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await app.listen(PORT);
    console.log(`Serveur démarré sur le port ${PORT}`);
    await verifyConnection();
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      console.log(`Le port ${PORT} est occupé, tentative avec le port ${PORT + 1}`);
      process.env.PORT = PORT + 1;
      startServer();
    } else {
      console.error('Erreur de démarrage du serveur:', error);
    }
  }
};

startServer();

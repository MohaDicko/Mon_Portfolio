import React, {useContext, useState} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import axios from "axios";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);

  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://node-mailer-five.vercel.app/api/mailing/",
        {
          to: email,
          subject: subject,
          html: message
        }
      );
      if (response.status === 200) {
        setNotification("Message sent successfully!");
      } else {
        setNotification("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setNotification("Failed to send message. Please try again later.");
    }
  };

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-container">
        <div className="contact-form-section">
          <h2 className="contact-form-title">Prenons contact</h2>
          <p className="contact-form-subtitle">
            Vous avez un projet ou une question ? Écrivez-moi directement.
          </p>
          <form onSubmit={handleFormSubmit} className="contact-form-inner">
            <div className="form-group-row">
              <div className="form-field">
                <label htmlFor="email">Votre email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="nom@exemple.com"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder="Comment puis-je vous aider ?"
                  required
                />
              </div>
            </div>
            <div className="message-field">
              <label htmlFor="message">Votre message</label>
              <textarea
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows="4"
                placeholder="Votre message ici..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Envoyer le message
            </button>
          </form>
          {notification && (
            <div
              className={`notification-pill ${
                notification.includes("success") ? "success" : "error"
              }`}
            >
              {notification === "Message sent successfully!"
                ? "✅ Message envoyé avec succès !"
                : "❌ Échec de l'envoi."}
            </div>
          )}
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            {emoji("Réalisé avec ❤️ par Mohamed Dicko © 2026")}
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/MohaDicko"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-dicko-4a0885196"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}

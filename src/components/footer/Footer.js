import React, { useContext, useState } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import axios from "axios";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://node-mailer-five.vercel.app/api/mailing/", {
        to: email,
        subject: subject,
        html: message,
      });
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
      <div className="flex flex-wrap mb-4 bg-gray-800 text-white p-8">
        <div className="footer-div w-full md:w-1/2 text-center mb-4 md:mb-0">
          <p className={`${isDark ? "dark-mode" : ""} text-sm`}>
            {emoji("Made with ❤️ by DICKO Mohamed")}
          </p>
          <p className={`${isDark ? "dark-mode" : ""} text-sm`}>
            Theme by{" "}
            <a href="*" className="text-blue-400 hover:underline">
              DICKO Mohamed
            </a>
          </p>
        </div>
        <div className="contact-form w-full md:w-1/2 p-4 bg-gray-700 rounded-lg shadow-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Contact Me
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-8">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="w-full px-3">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Send message
            </button>
          </form>
          {notification && (
            <div className="mt-4 text-center text-sm text-gray-300">
              {notification}
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
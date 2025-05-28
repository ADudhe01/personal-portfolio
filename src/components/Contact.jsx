import emailjs from "emailjs-com";
import { useRef } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_49nasra", // from EmailJS dashboard
        "template_6hxaash", // from EmailJS dashboard
        form.current,
        "mDOhmsByOOUAL65OH" // from EmailJS account
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Error sending message.");
        }
      )
      .finally(() => {
        form.current.reset(); // Reset the form after submission
      });
  };

  return (
    <section className={styles.contactSection}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.subtitle}>
        Feel free to reach out for collaborations, questions, or just to say hi!
      </p>
      <div className={styles.formCard}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input
            name="user_email"
            className={styles.input}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            name="user_name"
            className={styles.input}
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="subject"
            className={styles.input}
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            className={styles.textarea}
            placeholder="Message"
            rows={5}
            required
          />
          <button className={styles.sendButton} type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

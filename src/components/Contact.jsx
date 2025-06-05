import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("idle"); // 'idle', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    setFormStatus("sending");

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
          setFormStatus("success");
        },
        (error) => {
          console.error("Email error:", error.text);
          setFormStatus("error");
        }
      )
      .finally(() => {
        form.current.reset(); // Reset the form after submission
      });
  };

  const resetForm = () => {
    setFormStatus("idle");
  };

  return (
    <section className={styles.contactSection}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.subtitle}>
        Feel free to reach out for collaborations, questions, or just to say hi!
      </p>
      <div className={styles.formCard}>
        {formStatus === "idle" || formStatus === "sending" ? (
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
            <button className={styles.sendButton} type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Sending..." : "Send"}
            </button>
          </form>
        ) : formStatus === "success" ? (
          <div className={styles.statusMessage}>
            <p>Message sent successfully! Thank you for reaching out.</p>
            <button className={styles.resetButton} onClick={resetForm}>Send Another Message</button>
          </div>
        ) : (
          <div className={`${styles.statusMessage} ${styles.errorMessage}`}>
            <p>There was an error sending your message. Please try again.</p>
            <button className={styles.resetButton} onClick={resetForm}>Try Again</button>
          </div>
        )}
      </div>
    </section>
  );
}

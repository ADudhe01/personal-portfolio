import { useRef, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("idle"); // 'idle', 'sending', 'success', 'error'

  const sendEmail = async (e) => {
    e.preventDefault();

    setFormStatus("sending");

    try {
      const formData = new FormData(form.current);

      // Using Formspree - replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/xjkaajpy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Email sent successfully");
        setFormStatus("success");
        form.current.reset();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Email error:", error);
      setFormStatus("error");
    }
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
              name="email"
              className={styles.input}
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              name="name"
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
            <button
              className={styles.sendButton}
              type="submit"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? "Sending..." : "Send"}
            </button>
          </form>
        ) : formStatus === "success" ? (
          <div className={styles.statusMessage}>
            <p>Message sent successfully! Thank you for reaching out.</p>
            <button className={styles.resetButton} onClick={resetForm}>
              Send Another Message
            </button>
          </div>
        ) : (
          <div className={`${styles.statusMessage} ${styles.errorMessage}`}>
            <p>There was an error sending your message. Please try again.</p>
            <button className={styles.resetButton} onClick={resetForm}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

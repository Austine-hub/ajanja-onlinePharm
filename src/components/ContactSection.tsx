import { useState } from "react";
import styles from "./Contact.module.css";

// ✅ Import image for Vite bundling
import doctorImage from "../assets/doc.png";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Implement submission logic here (API call, etc.)
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.imageContainer}>
        <img
          src={doctorImage}
          alt="Healthcare professional with stethoscope"
          className={styles.doctorImage}
        />
      </div>

      <div className={styles.formContainer}>
        <h2 className={styles.title}>Contact Us</h2>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.inputRow}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputRow}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              <option value="">Select Department...</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="general">General Medicine</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleInputChange}
            className={styles.textarea}
            rows={5}
            required
          />

          <button type="submit" className={styles.submitButton}>
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;





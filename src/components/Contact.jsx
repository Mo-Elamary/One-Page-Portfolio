import React, { useState } from "react";

const validateEmail = (email) => {
  // simple regex for demo; good enough for form validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "", "sending", "success"

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = {};
    if (!form.name || form.name.trim().length < 2) errs.name = "Please enter your name (at least 2 characters).";
    if (!form.email || !validateEmail(form.email)) errs.email = "Please enter a valid email.";
    if (!form.message || form.message.trim().length < 10) errs.message = "Message must be at least 10 characters.";

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Simulate sending (no backend)
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 700);
  }

  return (
    <div className="container contact">
      <h3>Contact</h3>
      <p className="muted">Send me a message — I will reply as soon as possible.</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="6" />
          {errors.message && <small className="error">{errors.message}</small>}
        </div>

        <div className="form-row">
          <button className="btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <span className="success">Message sent! ✅</span>}
        </div>
      </form>
    </div>
  );
}

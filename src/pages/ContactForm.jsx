import '../styles/ContactForm.css';
import { useState } from 'react';
import PageTitle from '../components/PageTitle'; // ✅ Import the reusable title component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email.trim()) tempErrors.email = 'Email is required.';
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';

    if (formData.email && !isValidEmail(formData.email)) {
      tempErrors.email = 'Invalid email address.';
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      setSubmittedData(formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section className="contactForm">
      <div>
        <PageTitle title="Contact Me" /> {/* ✅ Uniform page header */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit">Send</button>
        </form>

        {submittedData && (
          <div className="submitted-data">
            <h2>Submitted Information:</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;


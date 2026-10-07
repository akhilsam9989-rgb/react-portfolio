import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const emptyFormValues = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  emailAddress: "",
  message: "",
};

const REDIRECT_DELAY_MS = 3000; // time the success message stays visible before returning Home

/** Returns an object of error messages keyed by field name (empty object = valid). */
function validateForm(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";

  if (!values.contactNumber.trim()) {
    errors.contactNumber = "Contact number is required.";
  } else if (values.contactNumber.replace(/\D/g, "").length < 10) {
    errors.contactNumber = "Enter a valid phone number (at least 10 digits).";
  }

  if (!values.emailAddress.trim()) {
    errors.emailAddress = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emailAddress)) {
    errors.emailAddress = "Enter a valid email address.";
  }

  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

function ContactForm() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(emptyFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const redirectTimer = useRef(null);

  // Clear the pending redirect if the user leaves the page early
  useEffect(() => () => clearTimeout(redirectTimer.current), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formValues);
    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // No backend is required for this assignment: the captured data is logged,
    // and a real endpoint (e.g. an email service) could be called here later.
    console.log("Contact form submission:", formValues);

    setIsSubmitted(true);
    setFormValues(emptyFormValues);
    redirectTimer.current = setTimeout(() => navigate("/"), REDIRECT_DELAY_MS);
  };

  if (isSubmitted) {
    return (
      <div className="form-success" role="status">
        <h2>Thank you!</h2>
        <p>Your message has been submitted successfully. Redirecting you to the Home page...</p>
      </div>
    );
  }

  // Small helper keeps each field's markup consistent
  const renderField = (name, label, type = "text") => (
    <div className="form-field">
      <label htmlFor={name}>{label} <span aria-hidden="true">*</span></label>
      <input
        id={name}
        name={name}
        type={type}
        value={formValues[name]}
        onChange={handleChange}
        aria-invalid={Boolean(formErrors[name])}
        aria-describedby={formErrors[name] ? `${name}-error` : undefined}
      />
      {formErrors[name] && <p id={`${name}-error`} className="form-error">{formErrors[name]}</p>}
    </div>
  );

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        {renderField("firstName", "First Name")}
        {renderField("lastName", "Last Name")}
      </div>
      {renderField("contactNumber", "Contact Number", "tel")}
      {renderField("emailAddress", "Email Address", "email")}
      <div className="form-field">
        <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formValues.message}
          onChange={handleChange}
          aria-invalid={Boolean(formErrors.message)}
          aria-describedby={formErrors.message ? "message-error" : undefined}
        />
        {formErrors.message && <p id="message-error" className="form-error">{formErrors.message}</p>}
      </div>
      <button type="submit" className="btn btn--primary">Submit</button>
    </form>
  );
}

export default ContactForm;

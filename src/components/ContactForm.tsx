import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import SuccessMessage from "./SuccessMessage";
import "./ContactForm.css";

interface FormData {
  name: string;
  email: string;
  date: string;
  description: string;
  address: string;
  groupSize: string;
  eventType: string;
  startTime: string;
}

function sendEmail(formData: FormData) {
  const serviceId = "service_3jsji0a";
  const templateId = "template_y0oqlgf";
  const userId = "bO46S97WAFdxESLht";

  emailjs
    .send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        date: formData.date,
        description: formData.description,
        address: formData.address,
        groupSize: formData.groupSize,
        eventType: formData.eventType,
        startTime: formData.startTime,
      },
      userId
    )
    .then((response) => {
      console.log("Email sent successfully:", response.status, response.text);
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    description: "",
    address: "",
    groupSize: "",
    eventType: "",
    startTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(formData);
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <SuccessMessage />
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Group Size:
            <input
              type="text"
              name="groupSize"
              value={formData.groupSize}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Type of Event:
            <input
              type="text"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Starting Time:
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
            />
          </label>
          <br />
          {submitted && (
            <button type="button">Form submitted successfully!</button>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;

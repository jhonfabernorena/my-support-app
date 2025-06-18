import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./TicketForm.css";

export default function TicketForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTicket = {
      ...form,
      response: "Thanks for your ticket. An agent will contact you soon.",
      status: "answered",
      date: new Date().toLocaleString(),
      timestamp: serverTimestamp()
    };

    await addDoc(collection(db, "tickets"), newTicket);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <h2 className="form-title">Submit a New Ticket</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="form-input"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="form-input"
        type="email"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Type your message..."
        className="form-textarea"
        required
      />
      <button type="submit" className="form-button">Send Ticket</button>
    </form>
  );
}

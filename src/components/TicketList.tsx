import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { Ticket } from "../types/Ticket";

import './TicketList.css';

export default function TicketList() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    const q = query(collection(db, "tickets"), orderBy("timestamp", "desc"));
    return onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Ticket));
      setTickets(data);
    });
  }, []);

  const closeModal = () => setSelectedTicket(null);

  return (
    <div className="ticket-container">
      <div className="ticket-list">
        {tickets.map(ticket => (
          <div
            key={ticket.id}
            className="ticket-card"
            onClick={() => setSelectedTicket(ticket)}
          >
            <span className="ticket-name">{ticket.name}</span>
            <span className={`ticket-status ${ticket.status === 'pending'}`}>
              {ticket.status}
            </span>
          </div>
        ))}
      </div>

      {selectedTicket && (
        <div className="ticket-modal" onClick={closeModal}>
          <div className="ticket-modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedTicket.name}</h2>
            <p><strong>Email:</strong> {selectedTicket.email}</p>
            <p><strong>Message:</strong> {selectedTicket.message}</p>
            <p><strong>Date:</strong> {selectedTicket.date}</p>
            <p><strong>Status:</strong> {selectedTicket.status}</p>
            {selectedTicket.response && (
              <p><strong>Response:</strong> {selectedTicket.response}</p>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

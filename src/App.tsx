import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">📨 Sistema de Tickets</h1>
      <TicketForm />
      TIckets
      <TicketList />
    </div>
  );
}

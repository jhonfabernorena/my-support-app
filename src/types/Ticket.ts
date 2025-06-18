export interface Ticket {
  id?: string;
  name: string;
  email: string;
  message: string;
  response?: string;
  status: "pending" | "answered";
  date: string;
}

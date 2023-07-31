import ReactDOM from "react-dom/client";
import { CalendarApp } from "./CalendarApp";
import "./styles.css";

console.log(process.env);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<CalendarApp />);

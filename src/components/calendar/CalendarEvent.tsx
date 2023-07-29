import { EventProps } from "react-big-calendar";
import { MyEvent } from "../../types/types";

export const CalendarEvent: React.FC<EventProps<MyEvent>> = ({ event }) => {
  const { title } = event;
  return (
    <div>
      <strong>{title}</strong>
    </div>
  );
};

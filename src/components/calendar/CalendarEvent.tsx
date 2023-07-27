import { EventProps } from "react-big-calendar";

export interface MyEvent {
  title: string;
  allDay?: boolean;
  start: Date;
  end: Date;
  isImportant?: boolean;
  bgcolor: string;
}

export const CalendarEvent: React.FC<EventProps<MyEvent>> = ({ event }) => {
  const { title } = event;
  return (
    <div>
      <strong>{title}</strong>
    </div>
  );
};

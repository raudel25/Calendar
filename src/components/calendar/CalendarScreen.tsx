import { Navbar } from "../ui/Navbar";
import {
  Calendar,
  momentLocalizer,
  EventPropGetter,
  View,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent, MyEvent } from "./CalendarEvent";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const events: Array<MyEvent> = [
  {
    title: "AA",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
  },
];

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem("lastView") as View) || "month"
  );

  const eventStyleGetter: EventPropGetter<MyEvent> = (
    event,
    start,
    end,
    isSelected
  ) => {
    let backgroundColor = "#f0f0f0";
    if (event.isImportant) {
      backgroundColor = "#ff0000";
    }
    let style: React.CSSProperties = {
      backgroundColor: backgroundColor,
      borderRadius: "0px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  const onDobleClick = (event: MyEvent) => {};

  const onSelected = (event: MyEvent) => {};

  const onViewChange = (lastView: View) => {
    localStorage.setItem("lastView", lastView);
    setLastView(lastView);
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        view={lastView}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelected}
        onView={onViewChange}
      />
    </div>
  );
};

import { Navbar } from "../ui/Navbar";
import {
  Calendar,
  momentLocalizer,
  EventPropGetter,
  View,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "./CalendarEvent";
import { MyEvent } from "../../types/types";
import { useState } from "react";
import { CalendarModal } from "./CalendarModal";
import { RootState, useAppDispatch } from "../../store/store";
import { openModalAct } from "../../actions/ui";
import { clearActiveEvent, setActiveEvent } from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";
import { useSelector } from "react-redux";
import { DeleteEventFab } from "../ui/DeleteEventFab";

const localizer = momentLocalizer(moment);

// const events: Array<MyEvent> = [
//   {
//     title: "AA",
//     start: moment().toDate(),
//     end: moment().add(2, "hours").toDate(),
//   },
// ];

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

  const dispatch = useAppDispatch();

  const { events, active } = useSelector((state: RootState) => state.calendar);

  const onDobleClick = () => {
    dispatch(openModalAct());
  };

  const onSelected = (event: MyEvent) => {
    dispatch(setActiveEvent(event));
  };

  const onSelectedSlot = () => {
    dispatch(clearActiveEvent());
  };

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
        onSelectSlot={onSelectedSlot}
        selectable={true}
      />

      <AddNewFab />

      {active && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};

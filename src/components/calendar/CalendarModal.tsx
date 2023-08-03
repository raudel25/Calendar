import Modal from "react-modal";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { closeModalAct } from "../../actions/ui";
import {
  addEvent,
  clearActiveEvent,
  startAddEvent,
  startUpdateEvent,
  updatedEvent,
} from "../../actions/events";
import { MyEvent } from "../../types/types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const dispatch = useAppDispatch();

  const openModal = useSelector((states: RootState) => states.ui).openModal;
  const active = useSelector((state: RootState) => state.calendar).active;

  const now = moment().minutes(0).seconds(0).add(1, "hours");

  const [startDate, setStartDate] = useState<Date>(now.toDate());
  const [endDate, setEndDate] = useState<Date>(now.add(1, "hours").toDate());
  const [formValues, handleInputChange, reset] = useForm({
    title: "",
    notes: "",
  });
  const [validTitle, setValidTitle] = useState(true);

  const { title, notes } = formValues;

  const [lastActive, setLastActive] = useState<MyEvent | null>(null);

  useEffect(() => {
    if (active && active !== lastActive) {
      reset({ title: active.title, notes: active.notes });
      setStartDate(new Date(active.start));
      setEndDate(new Date(active.end));
      setLastActive(active);
    } else if (!active && active !== lastActive) {
      reset({ title: "", notes: "" });
      setStartDate(now.toDate());
      setEndDate(now.add(1, "hours").toDate());
      setLastActive(active);
    }
  }, [active, now, reset, lastActive]);

  const closeModal = () => {
    reset({ title: "", notes: "" });
    dispatch(clearActiveEvent());
    dispatch(closeModalAct());
  };

  const handleStartDate = (date: Date) => setStartDate(date);
  const handleEndDate = (date: Date) => setEndDate(date);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (endDate.getTime() <= startDate.getTime()) {
      Swal.fire(
        "Error",
        "The start date must be less than the end date",
        "error"
      );
      return;
    }

    if (title.trim().length < 2) {
      setValidTitle(false);
      return;
    }

    active
      ? dispatch(
          startUpdateEvent(active.id, {
            title: title,
            start: startDate.getTime(),
            end: endDate.getTime(),
            notes: notes,
          })
        )
      : dispatch(
          startAddEvent({
            title: title,
            start: startDate.getTime(),
            end: endDate.getTime(),
            notes: notes,
          })
        );

    setValidTitle(true);
    closeModal();
  };

  const filterPassedTime = (time: Date) => {
    return time.getTime() > startDate.getTime();
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1> {active ? "Edit Event" : "New Event"} </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label>Start date and time</label>
          <div>
            <DatePicker
              selected={startDate}
              onChange={handleStartDate}
              dateFormat="dd/MM/yyyy h:mm aa"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              isClearable
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group mb-2">
          <label>End date and time</label>
          <div>
            <DatePicker
              selected={endDate}
              onChange={handleEndDate}
              dateFormat="dd/MM/yyyy h:mm aa"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              minDate={startDate}
              filterTime={filterPassedTime}
              isClearable
              className="form-control"
            />
          </div>
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Title and notes</label>
          <input
            type="text"
            className={`form-control ${!validTitle && "is-invalid"}`}
            placeholder="Event title"
            name="title"
            onChange={handleInputChange}
            value={title}
            autoComplete="off"
          />
          <small id="emailHelp" className="form-text text-muted">
            A short description
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            className="form-control"
            placeholder="Notes"
            rows={5}
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Additional information
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Save</span>
        </button>
      </form>
    </Modal>
  );
};

import Modal from "react-modal";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useForm } from "../../hooks/useForm";

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
  const closeModal = () => {};

  const now = moment().minutes(0).seconds(0).add(1, "hours");

  const [startDate, setStartDate] = useState<Date>(now.toDate());
  const [endDate, setEndDate] = useState<Date>(now.add(1, "hours").toDate());
  const [formValues, handleInputChange] = useForm({ title: "", notes: "" });

  const { title, notes } = formValues;

  const handleStartDate = (date: Date) => setStartDate(date);
  const handleEndDate = (date: Date) => setEndDate(date);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const filterPassedTime = (time: Date) => {
    return time.getTime() > startDate.getTime();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
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
          <label>Fecha y hora fin</label>
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
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            onChange={handleInputChange}
            value={title}
            autoComplete="off"
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            className="form-control"
            placeholder="Notas"
            rows={5}
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

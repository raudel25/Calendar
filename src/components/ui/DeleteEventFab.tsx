import { deleteEvent } from "../../actions/events";
import { useAppDispatch } from "../../store/store";

export const DeleteEventFab = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(deleteEvent());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleClick}>
      <i className="fas fa-trash"></i>
      <span>Delete Event</span>
    </button>
  );
};

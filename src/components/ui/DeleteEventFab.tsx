import { startDeleteEvent } from "../../actions/events";
import { RootState, useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";

export const DeleteEventFab = () => {
  const dispatch = useAppDispatch();

  const { active } = useSelector((state: RootState) => state.calendar);

  const handleClick = () => {
    dispatch(startDeleteEvent(active!));
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleClick}>
      <i className="fas fa-trash"></i>
      <span>Delete Event</span>
    </button>
  );
};

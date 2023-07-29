import { openModalAct } from "../../actions/ui";
import { useAppDispatch } from "../../store/store";

export const AddNewFab = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModalAct());
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

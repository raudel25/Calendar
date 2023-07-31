import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { startLogout } from "../../actions/auth";

export const Navbar = () => {
  const dispatch = useAppDispatch();

  const { name } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="navbar navbar-dark bg-dark mg-4">
      <span className="navbar-brand">{name}</span>

      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Logout</span>
      </button>
    </div>
  );
};

import { logout } from "../features/auth/authSlice";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
    const isLogin = useSelector(state => state.authLogin.isLogin);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <nav className="Navbar">
            <div>
                <h1>Redux-Auth</h1>
            </div>
            <div>
                {isLogin && (
                    <ul className="nav_list">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Profile</a>
                        </li>
                        <li>
                            <button className="nav_btn" onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavBar;

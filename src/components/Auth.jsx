import { useDispatch } from "react-redux";
import "./Auth.css";
import "./NavBar.css";
import { login } from "../features/auth/authSlice";

const Auth = () => {
    const dispatch = useDispatch();

    const loginHandler = (event) => {
        event.preventDefault();
        
        dispatch(login());
    };

    return (
        <section className="auth_container">
            <h1>Authentication Form</h1>
            <form className="auth_form" onSubmit={loginHandler}>
                <div className="field_control">
                    <label htmlFor="email">Email: </label>
                    <input type="email"></input>
                </div>

                <div className="field_control">
                    <label for="password">Password: </label>
                    <input type="password"></input>
                </div>
                <button className="nav_btn" type="submit">
                    Login
                </button>
            </form>
        </section>
    );
};

export default Auth;

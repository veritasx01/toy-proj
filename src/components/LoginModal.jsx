import { useState } from "react";
import { getUser, loginUser, signupUser } from "../utils/user-service";
import { setGlobalUser } from "../store/actions/user-actions";

export function LoginModal({ isShown = true, toggleHandle }) {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({});
  const hiddenStr = isShown ? "" : " hidden";

  const onLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (loginUser(data)) {
      const user = await getUser(data.username);
      setGlobalUser(user);
      toggleHandle();
    }
  };

  const onSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.isAdmin = data.isAdmin === "on" ? true : false;
    if (signupUser(data)) {
      setGlobalUser(data);
    }
  };

  return (
    <div className={`modal-container${hiddenStr}`}>
      <div className="modal-mainview">
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleHandle();
          }}
        >
          X
        </button>
        {isLogin ? (
          <form className="vertical-form" onSubmit={onLogin}>
            <div className="form-row">
              <label>username:</label>
              <input name="username" type="text"></input>
            </div>
            <div className="form-row">
              <label>password: </label>
              <input name="password" type="text"></input>
            </div>
            <button>Login</button>
          </form>
        ) : (
          <form className="vertical-form" onSubmit={onSignup}>
            <div className="form-row">
              <label>username:</label>
              <input name="username" type="text"></input>
            </div>
            <div className="form-row">
              <label>fullname:</label>
              <input name="fullname" type="text"></input>
            </div>
            <div className="form-row">
              <label>password: </label>
              <input name="password" type="text"></input>
            </div>
            <div className="form-row">
              <label>is-admin: </label>
              <input name="isAdmin" type="checkbox"></input>
            </div>
            <button>Signup</button>
          </form>
        )}
        <button onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? "click here to signup" : "click here to login"}
        </button>
      </div>
    </div>
  );
}

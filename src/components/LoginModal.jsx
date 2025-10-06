export function LoginModal({ isLogin, isShown = true, toggleHandle }) {
  const hiddenStr = isShown && !isLogin ? "" : " hidden";

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
        <form className="vertical-form">
          <div className="form-row">
            <label>username:</label>
            <input type="text"></input>
          </div>
          <div className="form-row">
            <label>fullname:</label>
            <input type="text"></input>
          </div>
          <div className="form-row">
            <label>password: </label>
            <input type="text"></input>
          </div>
          <div className="form-row">
            <label>is-admin: </label>
            <input type="checkbox"></input>
          </div>
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
}

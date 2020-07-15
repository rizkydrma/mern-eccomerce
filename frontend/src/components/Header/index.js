import { React, Link } from "libraries";

export default function index({ userInfo }) {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  return (
    <header className="header">
      <div className="brand">
        <button className="brand__button" onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/" className="brand__item">
          Amazona
        </Link>
      </div>
      <div className="link">
        <Link to="/cart" className="link__item">
          Cart
        </Link>
        {userInfo ? (
          <Link to="/profile" className="link__item">
            {userInfo.name}{" "}
          </Link>
        ) : (
          <Link to="/signin" className="link__item">
            Signin
          </Link>
        )}
      </div>
    </header>
  );
}

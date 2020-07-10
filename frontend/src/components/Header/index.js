import { React, Link } from "libraries";

export default function index() {
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
        <a href="cart.html" className="link__item">
          Cart
        </a>
        <a href="signin.html" className="link__item">
          Sign In
        </a>
      </div>
    </header>
  );
}

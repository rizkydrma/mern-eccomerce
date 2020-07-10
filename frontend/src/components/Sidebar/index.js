import { React } from "libraries";

export default function index() {
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar__button" onClick={closeMenu}>
        X
      </button>
      <ul>
        <li>Pants</li>
        <li>Shirts</li>
      </ul>
    </aside>
  );
}

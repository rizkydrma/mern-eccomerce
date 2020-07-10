import { React, BrowserRouter as Router, Switch, Route } from "libraries";
import { appRoutes } from "routes";
import data from "./assets/dummy/data";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <Router>
      <Switch>
        {appRoutes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="brand__button" onClick={openMenu}>
              &#9776;
            </button>
            <a href="index.html" className="brand__item">
              Amazona
            </a>
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
        <main className="main">
          <div className="content">
            <ul className="products">
              {data.products.map((product, i) => {
                return (
                  <li className="products__listItem" key={i}>
                    <div className="product">
                      <img
                        src={product.image}
                        alt="product"
                        className="product__image"
                      />
                      <div className="product__name">
                        <a href="product.html">{product.name}</a>
                      </div>
                      <div className="product__brand">{product.brand}</div>
                      <div className="product__price">{product.price}</div>
                      <div className="product-rating">
                        {product.rating} Star ({product.numReviews})
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
        <footer className="footer">All right reserved</footer>
      </div>
    </Router>
  );
}

export default App;

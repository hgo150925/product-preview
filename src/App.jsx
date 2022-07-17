import iconCart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <section className="container">
      <div className="container__grid">
        <div className="container__text">
          <p>perfume</p>
          <h1 className="container__text--title">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price">
            <ul>
              <li>$149.99</li>
              <li>$169.99</li>
            </ul>
          </div>
          <button className="btn">
            <img src={iconCart} alt="icon-cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;

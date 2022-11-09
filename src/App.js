import "./App.css";
import NaveBar from "./components/NaveBar";
const App = () => {
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>products</span>
          </h2>
        </div>
        <div className="row">
          {dataArray.map((item, index) => (
            <ProductCard
              {...item}
              btnClick={handleClick}
              index={index}
              key={index}
            >
              <div>
                <div>Hello New Div</div>
                <a>Go to cart</a>
              </div>
            </ProductCard>
          ))}
        </div>

        <div className="btn-box">
          <a href="" onClick={handleClick}>
            View All products ok
          </a>
        </div>
      </div>
    </section>
  );
};
export default App;


import products from "../data";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <section className="section">
        <div className="products">
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h5>{product.name}</h5>
                <Link to={`/products/${product.id}`}>
                  Click for more information
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Products;

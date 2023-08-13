import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <section className="section product">
      <h2>{productId}</h2>
    </section>
  );
};

export default SingleProduct;

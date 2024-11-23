/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;

  return (
    <div className="card card-compact bg-base-100  shadow-xl p-6">
      <figure className="bg-[#D9D9D9] rounded-xl">
        <img
          src={product_image}
          className="h-[181px] w-full "
          alt={product_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-start">
          <Link to={`/product/${product_id}`}><button className="btn btn-outline hover:bg-[#9538E2] rounded-full text-[#9538E2]">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

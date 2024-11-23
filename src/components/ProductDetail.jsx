import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { product_id } = useParams();
  const data = useLoaderData();


  const product = data.find((product) => product.product_id === product_id);

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    rating,
  } = product;

  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={product_image} className="max-w-sm shadow-2xl p-6 rounded-md" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product_title}</h1>
          <p className=" ml-2">
            Price:<i className="fa-solid fa-dollar-sign mb-2"></i>
            {price}
          </p>
          <button className="btn btn-outline rounded-full border-[#309C08] text-[#309C08] mb-3">
            in Stork
          </button>
          <p className="mb-2">{description} </p>
          <h2 className="font-bold">
            Specification: <br /> 
            <li>{specification}</li>
          </h2>
          <div className="flex">
            <h2 className="text-xl font-bold" >Rating: </h2>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className=" ml-5 px-5">{rating}</div>
          </div>
         <div className="flex ">
            <div><button className="btn btn-outline rounded-full bg-[#9538E2] text-white ">Add to Card <i className="fa-solid fa-cart-shopping"></i>  </button></div>
          <div className="ml-4 mt-2">
            <i className="fa-regular fa-heart text-2xl"></i>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

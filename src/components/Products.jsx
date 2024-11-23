import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('AllProduct.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);
    

    return (
        <div className="mt-96">
            <h1 className="text-4xl font-bold text-center mb-10 ">Explore Cutting-Edge Gadgets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(product => <Product product={product} key={product.product_id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;

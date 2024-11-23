/* eslint-disable react/prop-types */


const ProductList  = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 border rounded shadow">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
    );
};

export default ProductList ;
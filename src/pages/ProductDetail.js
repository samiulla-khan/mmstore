import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();

  const { products, addToCart } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(0);

  const product = products.find(
    (item) => item.id === Number(id)
  );


  // EVENT HANDLE ADD TO CART FUNCTIONALITY HERE
  const handleAddToCart = () => {
    if (quantity <= 0) {
      alert("Please select quantity greater than 0");
      return;
    }

    addToCart(product, quantity);
    setQuantity(0);
  };

  if (!product) {
    return <h2>Product Not Available</h2>;
  }

  return (
    <div className="container main-content">
      <div className="row">

        <div className="col-md-5">
          <img className="card-img-top pdp-image" src={product.image} alt={product.name} />
        </div>

        <div className="col-md-7">
          <h2>{product.title}</h2>

          <h4 className="product-category">
            Category : <span className="color-bg">{product.category}</span> 
          </h4>
          <h4 className="product-price">
            Price :  <span className="color-bg">$ {product.price}</span> 
          </h4>

          <p className="product-rating">
            ⭐ {product.rating.rate} 
          </p>

          <p className="product-description">{product.description}</p>

          <div className="form-group">
            <label className="mb-2">Quantity</label>
            <input type="number" className="form-control w-25 mb-3" placeholder="Select The Quantity" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))} />
          </div>
          <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
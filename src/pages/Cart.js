import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import '../App.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ProductContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalQuantityOfItems = cartItems.reduce((acc, item)=>{
    return acc + item.quantity
  }, 0);


  return (
    <div className="container main-content">
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <h4>No Products Added</h4>
      ) : (
        <div className="col-12 d-sm-flex flex-sm-row flex-sm-wrap align-items-start">
          <div className="col-12 col-sm-8">
            {
              cartItems.map((item) => (
                
                <div key={item.id}>
                  
                  <div className="cart-item-card">
                    <div className="row cart-item">
                      <div className="col-4">
                        {
                          <img className="cart-thumbnail" alt={item.title} src={item.image} />
                        }
                      </div>
                      <div className="col-8">
                        <h4>{item.title}</h4>
                        <p>⭐ {item.rating.rate} </p>
                        <p>$ {item.price}</p>
                        <div>
                          <h5>Quantity : {item.quantity} = <span className="color-bg">$ {item.price * item.quantity} </span></h5> 
                        </div>
                        <div>
                          <button className="btn btn-danger my-3" onClick={()=>removeFromCart(item.id)}>
                            Remove From Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="col-12 col-sm-4">
            <div className="card m-0 p-2">
              <div className="card-title">
                <h4 className="pirce-details-heading">Price Details</h4>
              </div>
              <div className="card-text">
                <p>Price ({totalQuantityOfItems} Items) : <b className="color-bg"> $ {totalPrice}</b> </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
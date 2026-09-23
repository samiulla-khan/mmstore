import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useSearchParams } from "react-router-dom";

const Search = ()=>{
    
    const {products} = useContext(ProductContext);
    // const {searchText} = useParams();
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("q");

    const results = products.filter((item)=>{
        return item.title.toLowerCase().includes(searchText.toLowerCase()) || item.category.toLowerCase().includes(searchText);
    });

     return (
    <div className="container main-content">
      <h2>Search Products</h2>

      {results.length === 0 ? (
        <h4>No Products Available With Search Key Word's</h4>
      ) : (
        <div className="col-12 d-sm-flex flex-sm-row flex-sm-wrap align-items-start">
          <div className="col-12 col-sm-8">
            {
              results.map((item) => (
                
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
                        <p>$ {item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );    
}

export default Search;
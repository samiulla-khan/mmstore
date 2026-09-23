import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import '../App.css'

const CategoryPage = () => {
    const { category } = useParams();
    const {products} = useContext(ProductContext);

    const categoryProducts = products.filter((item) => {
        return (
            item.category === category ||
            (category === "mens-clothing" &&
                item.category === "men's clothing") ||
            (category === "womens-clothing" &&
                item.category === "women's clothing")
        );
    });

    return (<div className="container main-content">
        <div className="category-container">
            <section>
                <div className="row mb-3">
                    <div className="col-10">
                        <h4 className="poppins-bold">
                            {category}
                        </h4>
                    </div>
                </div>

                {/* Products */}
                    <div className="row">
                        {categoryProducts.map((item) => (
                            <div
                                className="col-6 col-md-4 col-lg-3 mb-3"
                                key={item.id}
                            >
                                <div className="card h-100">

                                    <img className="card-img-top prodcut-thumbnail-image" src={item.image} alt={item.name} />

                                    <div className="card-body d-flex flex-column">

                                        <p className="card-title product-type poppins-regular">
                                            {item.category}
                                        </p>

                                        <p className="card-title product-name poppins-bold">
                                            {item.title.length > 35
                                                ? `${item.title.substring(0, 35)}...`
                                                : item.title}
                                        </p>

                                        <p className="card-text product-price poppins-medium">
                                            $ {item.price}
                                        </p>

                                        <div className="mt-auto">
                                            <Link to={`/product/${item.id}`}>
                                                <button className="btn btn-view-product">
                                                    View Product
                                                </button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> 

            </section>
        </div>
    </div>)


};

export default CategoryPage;
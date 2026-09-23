import { Link } from "react-router-dom";
import "./../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CategorySection = ({ title, products, category }) => {
    return (
        <div className="container">
            <div className="products-container">
                <section>
                    <div className="row mb-3">
                        <div className="col-10">
                            <h4 className="poppins-bold">
                                {title}
                            </h4>
                        </div>

                        <div className="col-2 d-flex align-items-center justify-content-end">
                            <Link
                                to={`/category/${category}`}
                                className="poppins-bold goto-arrow"
                                style={{ textDecoration: "none" }}
                            >
                                ›
                            </Link>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="row">
                        {products.slice(0,4).map((item) => (
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
        </div>
    );
};

export default CategorySection;
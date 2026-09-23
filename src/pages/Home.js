import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CategorySection from "../components/CategorySection";

const Home = () => {
  const { products } = useContext(ProductContext);

  const mensProducts = products.filter(
    (item) => item.category === "men's clothing"
  );

  const womensProducts = products.filter(
    (item) => item.category === "women's clothing"
  );

  const electronicsProducts = products.filter(
    (item) => item.category === "electronics"
  );

  const jeweleryProducts = products.filter(
    (item) => item.category === "jewelery"
  );

  return (
    <div className="container main-content">
      <CategorySection
        title="Men's Fashion"
        products={mensProducts}
        category="men's clothing"
      />

      <CategorySection
        title="Women's Fashion"
        products={womensProducts}
        category="women's clothing"
        
      />

      <CategorySection
        title="Electronics"
        products={electronicsProducts}
        category="electronics"
      />

      <CategorySection
        title="Jewelery"
        products={jeweleryProducts}
        category="jewelery"
      />
    </div>
  );
};

export default Home;
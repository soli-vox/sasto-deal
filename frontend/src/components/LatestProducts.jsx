import ProductImageOne from "../assets/images/mens/eleven.jpg";
import ProductCard from "./common/ProductCard";

const Latest = () => {


  const products = [
    {
      id: 1,
      name: "Red Cherry T-Shirt",
      price: 1200,
      originalPrice: 1800,
      image: ProductImageOne,
    },
    {
      id: 2,
      name: "Blue Denim Jacket",
      price: 2500,
      originalPrice: 3200,
      image: ProductImageOne,
    },
    {
      id: 3,
      name: "Green Cotton Shirt",
      price: 1500,
      originalPrice: null,
      image: ProductImageOne,
    },
    {
      id: 4,
      name: "Casual Sneakers",
      price: 2000,
      originalPrice: 2500,
      image: ProductImageOne,
    },
  ];


  return (
    <section className="arrival-section pt-4">
      <div className="container">
        <h3>Latest Products</h3>
        <div className="row mt-3">

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section >
  );
};

export default Latest;

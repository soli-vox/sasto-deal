import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="col-md-3 col-6">
            <div className="product card border-0">
                <div className="card-img">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-100"
                    />
                </div>
                <div className="card-body pt-3">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                    <div className="price">
                        NPR, {product.price}
                        {product.originalPrice && (
                            <span className="text-decoration-line-through ms-3">
                                NPR, {product.originalPrice}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
import { Link } from "react-router-dom";
import MainLayout from "./common/MainLayout";

import ProductImageOne from "../assets/images/mens/eleven.jpg";

const Shop = () => {
  return (
    <MainLayout>
      <div className="container">
        <nav aria-label="breadcrumb" className="py-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className="mb-3">Categories</h3>
                <ul>
                  <li className="mb-2">
                    <input type="checkbox" name="kids" id="kids" />
                    <label htmlFor="kids" className="ps-2">
                      Kids
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="mens" id="mens" />
                    <label htmlFor="mens" className="ps-2">
                      Mens
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="women" id="women" />
                    <label htmlFor="women" className="ps-2">
                      Women
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className="mb-3">Brands</h3>
                <ul>
                  <li className="mb-2">
                    <input type="checkbox" name="puma" id="puma" />
                    <label htmlFor="puma" className="ps-2">
                      Puma
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="yes" id="yes" />
                    <label htmlFor="yes" className="ps-2">
                      Yes
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="nike" id="nike" />
                    <label htmlFor="nike" className="ps-2">
                      Nike
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="levis" id="levis" />
                    <label htmlFor="levis" className="ps-2">
                      Levis
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row pb-5">
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <Link to="/product">
                      <img
                        src={ProductImageOne}
                        alt="new-arrival-product"
                        className="w-100"
                      />
                    </Link>
                  </div>

                  <div className="card-body pt-3">
                    <a href="">Red Cherry T-Shirt</a>
                    <div className="price">
                      NPR, 1200
                      <span className="text-decoration-line-through ms-3">
                        NPR, 1800
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <Link to="/product">
                      <img
                        src={ProductImageOne}
                        alt="new-arrival-product"
                        className="w-100"
                      />
                    </Link>
                  </div>

                  <div className="card-body pt-3">
                    <a href="">Red Cherry T-Shirt</a>
                    <div className="price">
                      NPR, 1200
                      <span className="text-decoration-line-through ms-3">
                        NPR, 1800
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <Link to="/product">
                    <img
                      src={ProductImageOne}
                      alt="new-arrival-product"
                      className="w-100"
                    />
                  </Link>
                </div>

                <div className="card-body pt-3">
                  <a href="">Red Cherry T-Shirt</a>
                  <div className="price">
                    NPR, 1200
                    <span className="text-decoration-line-through ms-3">
                      NPR, 1800
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <Link to="/product">
                      <img
                        src={ProductImageOne}
                        alt="new-arrival-product"
                        className="w-100"
                      />
                    </Link>
                  </div>

                  <div className="card-body pt-3">
                    <a href="">Red Cherry T-Shirt</a>
                    <div className="price">
                      NPR, 1200
                      <span className="text-decoration-line-through ms-3">
                        NPR, 1800
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <Link to="/product">
                      <img
                        src={ProductImageOne}
                        alt="new-arrival-product"
                        className="w-100"
                      />
                    </Link>
                  </div>

                  <div className="card-body pt-3">
                    <a href="">Red Cherry T-Shirt</a>
                    <div className="price">
                      NPR, 1200
                      <span className="text-decoration-line-through ms-3">
                        NPR, 1800
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <Link to="/product">
                      <img
                        src={ProductImageOne}
                        alt="new-arrival-product"
                        className="w-100"
                      />
                    </Link>
                  </div>

                  <div className="card-body pt-3">
                    <a href="">Red Cherry T-Shirt</a>
                    <div className="price">
                      NPR, 1200
                      <span className="text-decoration-line-through ms-3">
                        NPR, 1800
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;

import { Link } from "react-router-dom";
import MainLayout from "./common/MainLayout";

import ProductImageOne from "../assets/images/mens/eight.jpg";
import { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <MainLayout>
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb" className="py-5">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7">
            <h3 className="border-bottom pb-2">
              <strong>Billing Address</strong>
            </h3>
            <form action="">
              <div className="row pt-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="address"
                    id="address"
                    rows={4}
                    className="form-control"
                    placeholder="Address"
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <h3 className="border-bottom pb-2">
              <strong>Item Details</strong>
            </h3>
            <table className="table">
              <tbody>
                <tr>
                  <td width={100}>
                    <img
                      src={ProductImageOne}
                      width={80}
                      alt="productImageOne"
                    />
                  </td>
                  <td width={600}>
                    <h4>Cherry T-Shirt Full Sleeve</h4>
                    <div className="d-flex align-items-center pt-3">
                      <span>NPR,1200</span>
                      <div className="ps-3">
                        <button className="btn btn-size">XL</button>
                      </div>
                      <div className="ps-5">X 2</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width={100}>
                    <img
                      src={ProductImageOne}
                      width={80}
                      alt="productImageOne"
                    />
                  </td>
                  <td width={600}>
                    <h4>Cherry T-Shirt Full Sleeve</h4>
                    <div className="d-flex align-items-center pt-3">
                      <span>NPR,1200</span>
                      <div className="ps-3">
                        <button className="btn btn-size">XL</button>
                      </div>
                      <div className="ps-5">X 2</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-between border-bottom pb-2">
                  <div>
                    <strong>Subtotal</strong>
                  </div>
                  <div>NPR,1200</div>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <div>
                    <strong>Shipping Charges</strong>
                  </div>
                  <div>NPR,120</div>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <div>
                    <strong>Grand Total</strong>
                  </div>
                  <div>NPR,1220</div>
                </div>
              </div>
            </div>
            <h3 className="border-bottom pb-3 pt-3">Payment Methods</h3>
            <div>
              <input
                type="radio"
                onClick={handlePaymentMethod}
                checked={paymentMethod == "cod"}
                value={"cod"}
              />
              <label htmlFor="COD" className="form-label ps-1">
                <strong>COD</strong>
              </label>

              <input
                type="radio"
                onClick={handlePaymentMethod}
                checked={paymentMethod == "e-payment"}
                value={"e-payment"}
                className="ms-3"
              />
              <label htmlFor="e-payment" className="form-label ps-1">
                <strong>E-Payment</strong>
              </label>
              <input
                type="radio"
                onClick={handlePaymentMethod}
                checked={paymentMethod == "nepal-pay"}
                value={"nepal-pay"}
                className="ms-3"
              />
              <label htmlFor="nepal-pay" className="form-label ps-1">
                <strong>Nepal Pay</strong>
              </label>
            </div>
            <div className="row py-3 justify-content-end">
              <button className="btn btn-secondary text-uppercase">
                Pay Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;

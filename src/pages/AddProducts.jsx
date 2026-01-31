import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddProducts.css";
import { addProductApi } from "../Service/allApi";
import { Link, useNavigate } from "react-router-dom";

const AddProducts = () => {
  const naviagate = useNavigate();

  const [userInputs, setUserInputs] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleAddProducts = async (e) => {
    e.preventDefault();
    try {
      const res = await addProductApi(userInputs);
      console.log(res);
      if (res?.status === 201) {
        naviagate("/landing");
        alert(`${res.data.name}` + "  Added Successfully");
      } else {
        alert("failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="edit-wrapper">
      <div className="blur-circle-top"></div>
      <div className="blur-circle-bottom"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            {/* Back Link */}
            <div className="mb-4">
              <Link to={"/landing"} className="text-decoration-none back-link">
                ← Back to Inventory
              </Link>
            </div>

            <div className="edit-card shadow-lg">
              <div className="card-header-custom">
                <h2 className="h4 fw-bold mb-0">Add Product</h2>
                <p className="small mb-0 opacity-75">
                  Update your asset details
                </p>
              </div>

              <form
                className="card-body-custom"
                onSubmit={(e) => {
                  e.preventDefault();

                  if (
                    !userInputs.name ||
                    !userInputs.price ||
                    !userInputs.stock
                  ) {
                    alert("please full the input fields!!");
                    return;
                  }
                  if (userInputs.price <= 0 || userInputs.stock < 0) {
                    alert("Please enter Price and Stock!!!");
                    return;
                  }

                  handleAddProducts(e);
                }}
              >
                {/* Product Name */}
                <div className="form-group mb-4">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="e.g. Sony WH-1000XM5"
                    value={userInputs.name}
                    onChange={(e) =>
                      setUserInputs({ ...userInputs, name: e.target.value })
                    }
                  />
                </div>

                <div className="row">
                  {/* Price */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Price ($)</label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      placeholder="0.00"
                      value={userInputs.price}
                      onChange={(e) =>
                        setUserInputs({ ...userInputs, price: e.target.value })
                      }
                    />
                  </div>

                  {/* Stock */}
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Stock Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      placeholder="0"
                      value={userInputs.stock}
                      onChange={(e) =>
                        setUserInputs({ ...userInputs, stock: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Update Button */}
                <button
                  type="submit"
                  className="btn btn-lg w-100 update-button mt-2"
                >
                  ADD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;

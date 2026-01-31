import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { editProductApi } from '../Service/allApi';
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddProducts.css";

function EditProducts() {
    const navigate = useNavigate();
    const location = useLocation();
    const item = location.state?.item;

    const [userInputs, setUserInputs] = useState({
        name: "",
        price: "",
        stock: ""
    });

    useEffect(() => {
        if (item) {
            setUserInputs({
                name: item.name,
                price: item.price,
                stock: item.stock
            });
        } else {
            
        }
    }, [item]);

    const handleUpdateProducts = async (e) => {
        e.preventDefault();
        if (!userInputs.name || !userInputs.price || !userInputs.stock) {
            alert("Please fill all fields!!");
            return;
        }
        try {
            const res = await editProductApi(item.id, userInputs);
            if (res.status === 200) {
                alert("Product Updated Successfully");
                navigate('/landing');
            } else {
                alert("Update Failed");
            }
        } catch (err) {
            console.log(err);
            alert("Error Updating Product");
        }
    };

    return (
        <div className="edit-wrapper">
            <div className="blur-circle-top"></div>
            <div className="blur-circle-bottom"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5">
                        <div className="mb-4">
                            <Link to={"/landing"} className="text-decoration-none back-link">
                                ← Back to Inventory
                            </Link>
                        </div>

                        <div className="edit-card shadow-lg">
                            <div className="card-header-custom">
                                <h2 className="h4 fw-bold mb-0">Edit Product Details</h2>
                                <p className="small mb-0 opacity-75">
                                    Update your asset details
                                </p>
                            </div>

                            <form
                                className="card-body-custom"
                                onSubmit={handleUpdateProducts}
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

                                <button
                                    type="submit"
                                    className="btn btn-lg w-100 update-button mt-2"
                                >
                                    UPDATE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProducts;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { notElegible } from "../../Redux/product-action/ProductAction1";

export const Cart1 = () => {

    const cart_data1 = useSelector((state) => state.ProductsData1.cartData1);
    //console.log(cart_data);
     const dispatch = useDispatch();

    return (
        <div>
            cart_data1 && cart_data1.length ? (
            <div className="container">
                {
                    cart_data1.map((users) =>(
                        <div className="row">
                            <div className="col-md-6">
                                <img src={users.picture} alt={users.title} className="img-fluid" />
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <h3>{users.title}</h3>
                                </div>
                                <div>
                                    <h5>{users.firstName}  {users.lastName}</h5>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="mt-3">
                                    <button className="btn-danger" onClick={()=>{dispatch(notElegible(users.id))}}>Not Eligible</button>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
            ) : (<p>No One Is Selected</p>)
        </div>
    )
}
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedForJob } from "../../Redux/product-action/ProductAction1";
//import { addToCart } from "../../Redux/product-action/ProductAction";

const ProductDetail1 = () => {
    const [users, setUsers] = useState([]);


    const dispatch = useDispatch();

    const { id } = useParams()
    console.log(id);
    // const url = window.location.href;
    // const urlSplit = url.split["/"];
    // const id = urlSplit[4];
    // console.log (id);


    const getProductData = async () => {
        const { data } = await axios.get(`https://dummyapi.io/data/v1/user/${id}`,{
        method : 'GET',    
        headers : {
                'app-id' : '62b551719c7c3339909b4313'
            }
        })
        setUsers(data);
    }
    useEffect(() => {
        getProductData();
    }, [])
    return (
        <div>
        {
            
            Object.keys(users).length ? (
                <div className="container">
                    {
                        <div className="row">
                            <div className="col-md-6 border-dark">
                                <img src={users.picture} alt={users.title} className="img-fulid" />
                            </div>
                            <div className="col-md-6">
                                <div >
                                    <h3>{users.title}</h3>
                                </div>
                                <div>
                                    <span className="bg-secondary text-white px-4 py-2 text-uppercase">{users.firstName} {users.lastName}</span>
                                </div>
                                
                                <div className="mt-4">
                                    <button className="btn-info p-2" onClick={()=>{dispatch(selectedForJob (users))}}>Selected For Job</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            ) : (
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

            )
        }
        </div>
    );
};

export default ProductDetail1;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/product-action/ProductAction";

const ProductDetail = () => {
    const [product, setProduct] = useState([]);


    const dispatch = useDispatch();

    const { id } = useParams()
    console.log(id);
    // const url = window.location.href;
    // const urlSplit = url.split["/"];
    // const id = urlSplit[4];
    // console.log (id);


    const getProductData = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(data);
    }
    useEffect(() => {
        getProductData();
    }, [])
    return (
        <div>
        {
            
            Object.keys(product).length ? (
                <div className="container">
                    {
                        <div className="row">
                            <div className="col-md-6 border-dark">
                                <img src={product.image} alt={product.title} className="img-fulid" />
                            </div>
                            <div className="col-md-6">
                                <div >
                                    <h3>{product.title}</h3>
                                </div>
                                <div>
                                    <span className="bg-secondary text-white px-4 py-2 text-uppercase"><strong>Category : </strong>{product.category}</span>
                                </div>
                                <div className="mt-4">
                                    <span className="p-2 bg-info text-white "><strong>Price : $</strong>{product.price}</span>
                                </div>
                                <div className="mt-4">
                                    <button className="btn-info p-2" onClick={()=>{dispatch(addToCart(product))}}>Add To Cart</button>
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

export default ProductDetail;

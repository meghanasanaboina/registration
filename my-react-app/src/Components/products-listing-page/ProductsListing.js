import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ProductsListing = () => {
    const [productData, setProductData] = useState([]);

    const getproductsData = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setProductData(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getproductsData();
    }, []);

    return (
        <div className="container">
            {
                productData.length ? (
                    <div className="row">{
                        productData.map((product) => (

                            <div className="col-md-3 m-5" key={product.id}>
                                 <Link to={`/products/${product.id}`}>
                                    <div class="card" style={{ height: '400px' }} key={product.id}>
                                        <img src={product.image} class="card-img-top" alt={product.title} style={{ height: '200px' }} />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <p class="card-text">{product.category}</p>

                                        </div>
                                    </div>
                                </Link>
                            </div>

                        ))
                    } </div>) : (<div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>)
            }

        </div>
    )
}

export default ProductsListing;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const ProductsListening1 = () => {

    const [productData, setProductData] = useState([]);

    const getproductsData = async () => {
        try {
            const { data } = await axios.get(`https://dummyapi.io/data/v1/user?page=1&limit=20`, {
                method: 'GET',
                headers: {
                    'app-id': '62aaa7d74fa1b86b1ec956a1',
                }
            })
            setProductData(data);
            console.log(data);
        } catch (error) {
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
                        productData.data.map((product) => (

                            <div className="col-md-3 m-5" key={product.id}>
                                 <Link to={`/user/${product.id}`}>
                                    <div class="card" style={{ height: '400px' }} key={product.id}>
                                        <img src={product.picture} class="card-img-top" alt={product.title} style={{ height: '200px' }} />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title} {product.firstName} {product.lastName}</h5>
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
export default ProductsListening1;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../Redux/product-action/ProductAction'

export const Cart = () => {

    const cart_data = useSelector((state)=>state.ProductsData.cartData)
    
    //console.log(cart_data)

    const dispatch=useDispatch();

    return(
        <div>
            {
                cart_data && cart_data.length ? (
                    <div className="container">
                        {
                            cart_data.map((product)=>(
                                <div className="row">
                                    <div className="col-md-6 text-center  ">
                                        <img  src={product.image} alt={product.title}  style={{height:'150px'}} className="img-fluid" />
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <h3>{product.title}</h3>
                                        </div>
                                        <div>
                                            <p>{product.category}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div>
                                            <span className="p-2 bg-info text-white">Price : ${product.price}</span>
                                        </div>
                                        <div className='mt-3'>
                                            <button className="btn-danger" onClick={()=>{dispatch(removeFromCart(product.id))}}>Remove From Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (<p>No Items In The Cart</p>)
            }
        </div>
    )
}
import React from 'react';
import {products} from "../../products";
import {Product} from '../shop/Product';

export const Shop = () =>{
    return(
        <div className='shop'>
            <div className='title'>
                <h1>Phavour's Shop</h1>
            </div>
            <div className='products'>
                {products.map((product)=>( 
                    <Product data={product}/>
                    ))}
            </div>
        </div>
    )
}
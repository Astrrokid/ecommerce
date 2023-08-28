import React from 'react';
import {PRODUCTS} from "../../products";
import {Product} from '../shop/Product';

export const Shop = () =>{
    return(
        <div className='shop'>
            <div className='title'>
                <h1>Phavour's Shop</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map((product)=>( 
                    <Product data={PRODUCTS}/>
                    ))}
            </div>
        </div>
    )
}
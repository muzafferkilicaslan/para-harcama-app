import React from 'react';
import { useState } from 'react';
import { moneyFormat } from '../helpers';
import BasketItem from './BasketItem';


const Basket = ({basket, total, products, resetBasket}) => {
    return (
        <div className='basket-container container'>
            <h3>Alışveriş Detayları</h3>
            <ul>
            {basket.map(item=> (
                <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
            ))}
            </ul>
            <div className='total'>
                Toplam: $ {moneyFormat(total)}                
            </div>
            <button className='basket-reset-btn' onClick={resetBasket}>Sepeti Sıfırla</button>
            <style jsx>{`
            
            .basket-container{
                padding:20px;
                background: #fff;
                border:1px solid #ddd;
            }
            .basket-container h3{
                font-size:20px;
                margin-bottom:15px;
            }


            .basket-container .total{
                border-top:1px solid #ddd;
                padding-top: 10px ;
                margin-top:10px;
                font-size:18px;
                font-weight:bold;
                text-align:right;
                color: green;
            }

            .basket-reset-btn{
                background: #61dafb;
                height: 40px;
                padding: 0 20px;
                font-size:16px;
                font-weight:500;
                cursor:pointer;
            }

            `}</style>
        </div>
    );
};


export default Basket;
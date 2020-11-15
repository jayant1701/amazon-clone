import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

    const[{basket,user},dispatch]=useStateValue();
    console.log(basket);
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img 
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/35/gateway/mobile/stripe/Amazon_GW_MobileStrip_NTA_orange_1242x150._SX1242_CB469234474_.jpg'/>
                <div >
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {basket.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}/>
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

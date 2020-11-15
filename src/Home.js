import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {

    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                     src='https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg'
                     alt=''/>
                 <div className='home__row'>
                    <Product
                        id='122333'
                        title='The lean Startup'
                        image='https://n3.sdlcdn.com/imgs/j/d/h/The-Lean-Startup-How-Constant-SDL413141424-1-27f6d.jpeg'
                        rating={5}
                        price={15.99}
                    />
                   <Product
                        id='1222222'
                        title='Bosch Appliances TrueMixx Bold 600-Watt Mixer Grinder with 3 Jars (Black)'
                        image='https://images-na.ssl-images-amazon.com/images/I/71MQOZc-ehL._SL1500_.jpg'
                        rating={3}
                        price={15}
                    />
                 </div>
                 <div className='home__row'>
                    <Product
                        id='1333333'
                        title='Samsung Galaxy Tab A7 (10.4 inch, RAM 3 GB, ROM 32 GB, Wi-Fi-only), Gold'
                        image='https://images-na.ssl-images-amazon.com/images/I/71w6BjcLa6L._SL1500_.jpg'
                        rating={5}
                        price={250}
                    />
                    <Product
                        id='144444'
                        title='boAt Rockerz 450 Bluetooth On-Ear Headphone with Mic(Luscious Black)'
                        image='https://images-na.ssl-images-amazon.com/images/I/61ihz46SLOL._SL1500_.jpg'
                        rating={4}
                        price={20}
                    />
                    <Product
                        id='1555555'
                        title='Apple iPhone 11 (128GB) - Black (Includes EarPods, Power Adapter)'
                        image='https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg'
                        rating={5}
                        price={700}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='166666'
                        title='OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)'
                        image='https://images-na.ssl-images-amazon.com/images/I/81kmtB1326L._SL1500_.jpg'
                        rating={4}
                        price={300}
                    />
                 </div>
                
            </div>
        </div>
    )
}

export default Home

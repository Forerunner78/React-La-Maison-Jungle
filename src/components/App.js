import Banner from './Banner'
import leaf from '../assets/leaf.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import { useState, useEffect } from 'react'
import '../styles/Layout.css'

function App() {
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    return (
        <div>
            <Banner>
                <h1 className='lmj-mainTitle'>Pour les passionné·e·s de plantes 🌿🌱🌵</h1>
                <div className='lmj-titleLogo'>
                    <img src={leaf} alt='La maison jungle' className='lmj-logo' />
                    <h1 className='lmj-title'>La maison jungle</h1>
                </div>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App
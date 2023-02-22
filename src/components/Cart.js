import '../styles/Cart.css'
import { useState } from 'react'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )

	function removeLineItem(name) {
		const newCart = cart.filter((product) => product.name !== name);
    	updateCart(newCart);
	}

    return <div>
		<div className={isOpen ? 'lmj-cart lmj-cart-open' : 'lmj-cart lmj-cart-close'}>
			<button
				className='lmj-cart-close-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul className="productLineItem">
						{cart.map(({ name, price, amount }, index) => (
							<li className="productLineItemEntry">
								<span className="productLineItemTitle" key={`${name}-${index}`}>
									{name} {price}€ x {amount}
								</span>
								<span>
									<button className="productLineItemRemoveButton" onClick={() => removeLineItem(name)}>X</button>
								</span>
							</li>
								
						))}
					</ul>
					<div className="endOfCartSection">
						<h3>Total : {total}€</h3>
						<button className="removeAllCartButton" onClick={() => updateCart([])}>Vider le panier</button>
					</div>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
		<div>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	</div>
    // ) : (
    //     <div className='lmj-cart-closed'>
            
    //     </div>
    // )
}

export default Cart
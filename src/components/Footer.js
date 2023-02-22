import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
		setInputValue(e.target.value)
	}
    
    function handleBlur(value) {
        if (!value.includes('@')) {
            alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide.')
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <div>
                <input
                    value={inputValue}
                    placeholder='Entrez votre email'
                    onChange={handleInput}
                    onBlur={handleBlur}
                />
                <button 
                    onClick={() => alert(inputValue)} 
                    onBlur={() => handleBlur(inputValue)}>
                        Envoyer
                </button>
            </div>
		</footer>
	)
}

export default Footer

// l'événement  blur   (quand on clique en dehors du champ) qui déclenche une alerte si inputValue ne contient pas le caractère "@". 
// Cette alerte devra préciser "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.”
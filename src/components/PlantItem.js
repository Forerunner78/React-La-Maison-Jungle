import React, { useState } from 'react';
import CareScale from './CareScale'
import '../styles/PlantItem.css'
import '../styles/Modal.css'

function PlantItem({ cover, name, water, light, bestSale, specialOffer, price, description }) {
	// const handleClick = (plantName) => {console.log('Ceci est une ' + plantName)};
    const [modalVisible, setModalVisible] = useState(false)

    return <div className='lmj-plant-item' 
                onClick={() => handleClick(name)} 
                onMouseEnter={() => description ? setModalVisible(true) : setModalVisible(false)} 
                onMouseLeave={() => setModalVisible(false)}
            >
        {cover && <img src={cover} alt={name} className='lmj-plant-item-cover' />}
        <span className='lmj-plant-item-title'>
            {bestSale && <span>🔥</span>}
            {name}
            {bestSale && <span>🔥</span>}
        </span>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
        {specialOffer && <div className='lmj-sales'>Soldes</div>}
        <span className='lmj-plant-item-price'>{price}€</span>
        {modalVisible && <div className='modal'>
            <p className="modal-content">{description}</p>
        </div>}
    </div>
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export default PlantItem
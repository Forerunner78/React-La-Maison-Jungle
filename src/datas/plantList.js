import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		cover: monstera,
		category: 'classique',
		id: '1ed',
        isBestSale: true,
		water: 1,
		light: 1,
		price: 15,
		description: 'Une plante magnifique'
	},
	{
		name: 'ficus lyrata',
		cover: lyrata,
		category: 'classique',
		id: '2ab',
		water: 2,
		light: 2,
		price: 25
	},
	{
		name: 'pothos argenté',
		cover: pothos,
		category: 'classique',
		id: '3sd',
		isSpecialOffer: true,
		water: 3,
		light: 3,
		price: 30
	},
	{
		name: 'cactus',
		cover: cactus,
		category: 'classique',
		id: '4kk',
		water: 1,
		light: 3,
		price: 7
	},
	{
		name: 'olivier',
		cover: olivier,
		category: 'extérieur',
		id: '5pl',
		water: 2,
		light: 1,
		price: 12
	},
	{
		name: 'menthe',
		cover: mint,
		category: 'extérieur',
		id: '6uo',
		water: 3,
		light: 1,
		price: 8
	},
	{
		name: 'basilique',
		cover: basil,
		category: 'extérieur',
		id: '7ie',
		isSpecialOffer: true,
		water: 1,
		light: 3,
		price: 28
	},
	{
		name: 'calathea',
		cover: calathea,
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		water: 3,
		light: 2,
		price: 11
	},
	{
		name: 'succulente',
		cover: succulent,
		category: 'plante grasse',
		id: '9vn',
		water: 1,
		light: 1,
		price: 19
	}
]
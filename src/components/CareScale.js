// const {scaleValue, careType} = props
// On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
// const scaleValue = props.scaleValue et
// const careType = props.careType
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? 
    
        (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

    return (
        <div onClick={() => displayInformations(scaleValue, careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

function displayInformations(scaleValue, careType) {
    const quantityLabel = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }

    const resource = careType === 'light' ? 'de lumière' : 'd\'arrosage'
    const translatedScaleType = careType === 'light' ? 'Ensoleillement' : 'Besoin en eau'

    alert(translatedScaleType + ': cette plante requiert ' + quantityLabel[scaleValue] + ' ' + resource)
}
    
export default CareScale
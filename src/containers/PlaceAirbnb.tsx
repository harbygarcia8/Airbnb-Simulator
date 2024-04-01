import { useEffect, useState } from 'react'
import '../styles/PlaceAirbnb.scss'
import { IMAGE_BY_CATEGORY, pictureByCategory } from '../models/images.filter'
import Card from '../components/Card/Card'


function PlaceAirbnb() {

    const [places, setPlaces] = useState<Array<pictureByCategory>>([])
    useEffect(() => {
        setPlaces(IMAGE_BY_CATEGORY);
    },[])


  return (
    <div className='cards-flex'>
        {places.map((place) => (
            <Card card={place} key={place.id} />
        ))}
    </div>
  )
}

export default PlaceAirbnb
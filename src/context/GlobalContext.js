import { createContext, useEffect, useState } from 'react'
import { getPlacesData, getWeatherData } from '../api'
const initialState = []
export const GlobalContext = createContext(initialState)
export const Provider = ({ children }) => {
    const [places, setPlaces] = useState([])
    const [data, setData] = useState();
    const [childClicked, setChildClicked] = useState(null)
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState(0)
    const [coordinates, setCoordinates] = useState()
    const [bounds, setBounds] = useState({ ne: 0, sw: 0 })
    const [weatherData, setWeatherData] = useState([]);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude })
            },
        )
    }, [])

    useEffect(() => {
        rating === 0 ? setPlaces(data) : setPlaces(data.filter((place) => Number(place.rating) >= rating))
    }, [data, rating])



    useEffect(() => {
        if (bounds.ne && bounds.sw) {
            setLoading(true)
            getWeatherData(coordinates.lat,coordinates.lng).then((data)=>{
                setWeatherData(data)
            })

            getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
                setData(data?.filter((place) => place.name && place.num_reviews > 0))
                setLoading(false)
            })
        }

    }, [bounds, type])





    return (
        <GlobalContext.Provider
            value={{
                places,
                childClicked,
                setChildClicked,
                loading,
                setLoading,
                type,
                setType,
                rating,
                setRating,
                coordinates,
                setCoordinates,
                bounds,
                setBounds,
                weatherData
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

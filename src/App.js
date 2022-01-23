import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import { CssBaseline, Grid } from '@material-ui/core'
import { getPlacesData } from './api'
import { GlobalContext } from './context/GlobalContext'

export default function App() {
  const [places, setPlaces] = useState([])
  const { data,setLoading } = useContext(GlobalContext)


  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({ ne: 0, sw: 0 })

  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      },
    )
  }, [])


  // useEffect(() => {
  //   setPlaces(data)
  // }, [])

  useEffect(() => {
    setLoading(true)
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data)
      setLoading(false)
    })

  }, [coordinates, bounds])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8} style={{ marginTop: "1rem" }}>
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
            places={places}
          />
        </Grid>
      </Grid>

      {/* <PlaceDetails /> */}
    </>
  )
}

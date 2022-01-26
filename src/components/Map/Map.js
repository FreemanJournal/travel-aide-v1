import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import { Rating } from '@material-ui/lab'
import GoogleMapReact from 'google-map-react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import useStyles from './style'

export default function Map() {
  const {
    places,
    setChildClicked,
    setCoordinates,
    coordinates,
    setBounds,
  } = useContext(GlobalContext)
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')
  


  return (
    <>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: 'AIzaSyDKAIWbkM0JwPKv5CVcIvM_iYsj5c7XtMs' }}
          // bootstrapURLKeys={{ key: 'AIzaSyCycdhw4EzSNqG1HbR6wPwGxiopxb4Dzu0' }}
          bootstrapURLKeys={{ key: 'AIzaSyBwDO2qKDHcBy7tahPkgTTAltmOi3cjeHM' }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          }}
          onChildClick={(child) => setChildClicked(child)}
        >
          {places?.map((place, i) => (
            
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={1} className={classes.paper}>
                  <Typography
                    className={classes.typography}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : 'https://bit.ly/3IeWCLe'
                    }
                    alt={place.name}
                    className={classes.pointer}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </>
  )
}

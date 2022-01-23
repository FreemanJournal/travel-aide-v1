import {
  Card,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'

import React, { createRef, useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import useStyles from './style'
const List = ({ places }) => {
  const classes = useStyles()
  const [type, setType] = useState('restaurant')
  const [rating, setRating] = useState(0)
  const { childClicked, loading } = useContext(GlobalContext)
  const [elementRef, setElementRef] = useState([]);
  const propRef = useRef(null)

  useEffect(() => {
    const refs = Array(places?.length).fill().map((item, i) => elementRef[i] || createRef());
    setElementRef(refs)

  }, [places])

 


  return (
    <>
      <div className={classes.container}>
        <Typography variant="h4">
          Restaurants, Hotels & Attractions around you
        </Typography>
        {loading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (<>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={({ target: [value] }) => setType(value)}
            >
              <MenuItem value="restaurant">Restaurant</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={rating}
              onChange={({ target: [value] }) => setRating(value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => {

              return (<Grid ref={elementRef[i]} item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elementRef[i]}
                  
                />
              </Grid>)
            })}

          </Grid>
        </>)}
      </div>
    </>
  )
}

export default List;
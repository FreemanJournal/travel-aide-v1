import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Autocomplete } from '@react-google-maps/api'
import SearchIcon from '@material-ui/icons/Search'
import React, { useContext, useState } from 'react'
import useStyles from './styles'
import { GlobalContext } from '../../context/GlobalContext'
export default function Header() {
  const classes = useStyles()
  const {
    setCoordinates,
  } = useContext(GlobalContext)
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC)
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    setCoordinates({ lat, lng })
  }
  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Aide
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore New Places
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search...."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

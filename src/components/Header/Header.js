import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Autocomplete } from '@react-google-maps/api'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import useStyles from './styles'
export default function Header() {
  const classes = useStyles()
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
            {/* <Autocomplete> */}
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
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

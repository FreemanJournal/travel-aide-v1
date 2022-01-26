import { CssBaseline, Grid } from '@material-ui/core'
import React from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

export default function App() {
  
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List  />
        </Grid>
        <Grid item xs={12} md={8} style={{ marginTop: '1rem' }}>
          <Map  />
        </Grid>
      </Grid>

      {/* <PlaceDetails /> */}
    </>
  )
}

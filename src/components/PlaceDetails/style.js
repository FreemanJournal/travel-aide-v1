import { makeStyles } from '@material-ui/core/styles'
import {red,blueGrey
}  from '@mui/material/colors'
const primary = blueGrey[500];
export default makeStyles(() => ({

  chip: {
    margin: '5px 5px 5px 0',
    background:[primary]
    
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))

import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';


const ChronicleTheme = createMuiTheme({
      typography: {
            useNextVariants: true,
            fontFamily: ['Baskerville, ArmBoloragir'],

      },
      palette : {

            primary:{
                  main: '#ff4400'
            },

            secondary:{
                  
                  main: '#6f42c1'
            }
      }
     
      
})

export default ChronicleTheme


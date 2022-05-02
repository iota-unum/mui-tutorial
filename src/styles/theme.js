import { createTheme } from "@mui/material";






const theme= createTheme({

    palette: {
        type: 'light',
        primary: {
          main: '#2E7D32',
        },
        secondary: {
          main: '#303f9f',
        },
        background: {
          default: '#e8eaf6',
        },
      },

components: {
    MuiButton:{
        styleOverrides:{
            root: {
                borderRadius: '50px',
                width: '10rem'            }
        }
    }
}
})


export default theme
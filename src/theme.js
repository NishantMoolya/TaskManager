import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main:"#b2ff56"
        }
    }
})

export default responsiveFontSizes(theme,5);
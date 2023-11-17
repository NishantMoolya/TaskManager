import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main:"#673ab7",
            light:"#d1c4e9",
            contrastText:"#ffff"
        },
        secondary:{
            main:"#00b0ff"
        },
        error:{
            main:"#d32f2f",
            light:"#EF5350"
        },
    },
    components:{
        MuiAccordion:{
            styleOverrides:{
                root:{
                    backgroundColor:"#d1c4e9",
                    color:"#673ab7"
                }
            }
        }
    }
})

export default theme;
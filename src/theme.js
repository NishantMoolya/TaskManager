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
                    background:"linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(209,196,233,1) 100%)",
                    color:"#673ab7"
                }
            }
        }
    }
})

export default theme;
import { Link } from "react-router-dom";
import {AppBar,Toolbar,IconButton,Typography,Stack,Button} from '@mui/material'
import { HomeMini } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import { createSvgIcon } from '@mui/material/utils';
function Header(){
    return(
       <div className="Header" >
           <AppBar position="fixed" id="header_1">
          <Toolbar>
             <IconButton size="large" edge="start" color="inherit" aria-label="logo">
             <HomeMini />
             </IconButton>
             <Typography variant="h6" component='div' sx={{flexGrow:1}}>
                 Vbooks
             </Typography>
             <Stack direction='row' spacing={2}>                
                 <Button color="inherit">Settings</Button>                 
                 <Button color="inherit">Log_out</Button>
             </Stack>
          </Toolbar>
      </AppBar>
       </div>

      
    )
}
export default Header;
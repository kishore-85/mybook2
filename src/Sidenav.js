import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import{Box,Toolbar}  from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
function Sidenav(){
    return(
     <>           
      
       <List sx={{backgroundColor:'#EAECEC'}}>
         <ListItemButton>
           <ListItemIcon>
             <PersonAddIcon></PersonAddIcon>
           </ListItemIcon>
           <ListItemText> <Link to="/Customer">Customer</Link></ListItemText>                     
         </ListItemButton>

         <ListItemButton>
           <ListItemIcon>
             <MailIcon></MailIcon>
           </ListItemIcon>
           <ListItemText><Link to="/Product">Prodouct</Link></ListItemText>           
         </ListItemButton>


         <ListItemButton>
           <ListItemIcon>
             <CurrencyRupeeIcon></CurrencyRupeeIcon>
           </ListItemIcon>
           <ListItemText> <Link to="/Billing">Billing</Link></ListItemText>          
         </ListItemButton>
       </List>
       
     
      </>        
    )
}
export default Sidenav;
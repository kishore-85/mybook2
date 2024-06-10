import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Addcustomer(){
    return(
        <div>
        <p>Add customer screen...</p>
        <div className='row'>
        <Button variant="contained">Submit</Button>
        </div><br></br>

       <div className='row'>
       <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
             Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
           Link
          </Button>

          <Button variant="contained" color="success">
        Success
      </Button>
        </Stack>
       </div><br></br>

       <div className='row'>
          <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
         </Stack>
       </div><br></br>

       <div  className='row'>
        <Stack direction="row" spacing={1}>     
           <IconButton color="primary" aria-label="add to shopping cart">
             <AddShoppingCartIcon />
         </IconButton>
        </Stack>
        </div><br></br>


       




   
        
       
        </div>
    )
}

export default Addcustomer;
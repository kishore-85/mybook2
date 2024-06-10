import { Stack, TextField, Divider } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from '@mui/material/Box';
import {Checkbox} from '@mui/material'
import { useState } from "react";
import Button from '@mui/material/Button';


function AddProduct() {

  const  [Purchasevalue,setPurchasevalue] = useState(false)
  const   [salesvalue,setSalesvalue] = useState(false)

   function handleChangePurchase(e){
    setPurchasevalue(e.target.checked);
   }

   function handleChangeSales(e){
    setSalesvalue(e.target.checked);
   }
   console.log(Purchasevalue,'p');
   console.log(salesvalue,'s');
  return (
    <div>
      <Stack margin="14px" spacing={4}>
        <Stack direction="row" spacing={10}>
          <label style={{ paddingTop: "5px" }}>Product Name</label>
          <TextField label="Product" size="small" required></TextField>
          {/* <TextField label="Product" size='small'></TextField> */}
        </Stack>
        <Stack direction="row" spacing={15}>
          <label style={{ paddingTop: "5px" }}>Category</label>
          <TextField label="Customer" size="small"></TextField>
        </Stack>

        <Stack direction="row" spacing={19.5}>
          <label style={{ paddingTop: "5px" }}>SKU</label>
          <TextField label="SKU" size="small"></TextField>
        </Stack>

        <Stack direction="row" spacing={10}>
        <label style={{ paddingTop: "5px" }}>Tax-Preference</label>
          <FormControl>            
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Taxable"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Taxable" control={<Radio />} label="Taxable"             
              />
              <FormControlLabel
                value="Non-Txable" control={<Radio />}  label="Non-Txable"               
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>

      <Divider></Divider>
      
      <Stack spacing={8} direction="row" sx={{padding:'15px'}}>
        <Box sx={{width:'500px',height:'300px',backgroundColor:'#f7f7f5',padding:'10px'}}>       
           <FormControlLabel label="Purchase" control={<Checkbox onChange={handleChangePurchase} checked={Purchasevalue}></Checkbox>}></FormControlLabel>
           <Stack direction="row" spacing={7}>
             <label style={{ paddingTop: "5px" }}>Purchase Price</label>
             <TextField label="INR" size="small"></TextField>
           </Stack>
           <Stack direction="row" spacing={10} sx={{paddingTop:'15px'}}>
             <label style={{ paddingTop: "5px" }}>Description</label>
             <TextField
                id="outlined-textarea"
                label="Description"                
                multiline
                rows={4}
                sx={{width:'300px'}}
             />
           </Stack>
        </Box>
        <Box sx={{width:'500px',height:'300px',backgroundColor:'#f7f7f5',padding:'10px'}}>
          <FormControlLabel label="sales" control={<Checkbox onChange={handleChangeSales} checked={salesvalue}></Checkbox>}></FormControlLabel>
          <Stack direction="row" spacing={10}>
             <label style={{ paddingTop: "5px" }}>Selling Price</label>
             <TextField label="INR" size="small"></TextField>
           </Stack>
           <Stack direction="row" spacing={10} sx={{paddingTop:'15px'}}>
             <label style={{ paddingTop: "5px" }}>Description</label>
             <TextField
                id="outlined-textarea"
                label="Description"                
                multiline
                rows={4}
                sx={{width:'300px'}}
             />
           </Stack>
        </Box>        
      </Stack>
      <Divider></Divider>
      <Stack sx={{ textAlign: 'center', margin:'10px'}}>
        <Box>
        <Button variant="contained">Submit</Button>
        <Button sx={{margin:'10px'}} variant="outlined">Cancel</Button>
        </Box>        
      </Stack>
     
    </div>
  );
}

export default AddProduct;

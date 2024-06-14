import { Stack, TextField, Divider } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from '@mui/material/Box';
import {Checkbox,width} from '@mui/material'
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import Alert from '@mui/material/Alert';
import * as Yup from 'yup'

function AddProduct() {

  const  [Purchaseval,setPurchaseval] = useState(false)
  const   [salesvalue,setSalesvalue] = useState(false)

   function handlepurchaseval(e){
    setPurchaseval(e.target.checked);
    
   }

   function handleChangeSales(e){
    setSalesvalue(e.target.checked);
   }

   const validationSchema = Yup.object({
    prod_name: Yup.string().required(),
    category: Yup.string().required(),      
   })

   useEffect(()=>{
     console.log('suma')
   },[Purchaseval])
   
   const formik = useFormik({
     initialValues:{
       prod_name:'',
       category:'',
       SKU:'',
       Purchase_price:'',
       Sales_price:'',
       P_dscrpt:'',
       S_dscrpt:'',
       Tax_prfnce:null,
       Purchasevalue:Purchaseval,
       salesvalue:salesvalue
     },
     onSubmit:(e)=>{
       formik.resetForm();
       console.log(e,'val')
     },
     validationSchema
   })

   useEffect(()=>{
       
   },[formik])
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <Stack margin="14px" spacing={4}>

        <Stack direction="row">
          <Stack>
              <label style={{ paddingTop: "5px" }}>Product Name</label>
          </Stack>
          <Stack sx={{marginLeft:'45px',marginRight:'5px'}}>
              <TextField label="Product" size="small" name="prod_name" onChange={formik.handleChange} value={formik.values.prod_name} ></TextField>
          </Stack>       
            {formik.errors.prod_name?<Alert severity="error">Product name is required.</Alert>:null}                           
        </Stack>

        <Stack direction="row">
          <Stack>
               <label style={{ paddingTop: "5px" }}>Category</label>
          </Stack>
          <Stack  sx={{marginLeft:'82px',marginRight:'5px'}}>
               <TextField label="product category" name="category" onChange={formik.handleChange} value={formik.values.category} size="small"></TextField>  
          </Stack>                
          {formik.errors.category?<Alert severity="error">category  is required.</Alert>:null} 
        </Stack>       
        
       
        
        <Stack direction="row">
          <Stack>
               <label style={{ paddingTop: "5px" }}>SKU</label>
          </Stack>
          <Stack sx={{marginLeft:'120px'}}>
               <TextField label="Unit" name="SKU" onChange={formik.handleChange} value={formik.values.SKU} size="small"></TextField> 
          </Stack>                  
        </Stack>

        <Stack direction="row" spacing={6}>
          <label style={{ paddingTop: "5px" }}>Tax-Preference</label>
          <FormControl>            
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Taxable"
              name="radio-buttons-group"
            >
              <FormControlLabel
                   name="Tax_prfnce" onChange={formik.handleChange} value="Taxble" control={<Radio />} label="Taxable"             
              />
              <FormControlLabel
                   name="Tax_prfnce" onChange={formik.handleChange} value="Non-Txable" control={<Radio />}  label="Non-Txable"               
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>

      <Divider></Divider>
      
      <Stack spacing={8} direction="row" sx={{padding:'15px'}}>
        <Box sx={{width:'500px',height:'300px',backgroundColor:'#f7f7f5',padding:'10px'}}>       
           <FormControlLabel label="Purchase" control={<Checkbox onChange={handlepurchaseval} name="Purchasevalue" ></Checkbox>}></FormControlLabel>
           <Stack direction="row" spacing={7}>
             <label style={{ paddingTop: "5px" }}>Purchase Price</label>
             <TextField label="INR" size="small"  name="Purchase_price" onChange={formik.handleChange} value={formik.values.Purchase_price}> </TextField>             
           </Stack>
           <Stack direction="row" spacing={10} sx={{paddingTop:'15px'}}>
             <label style={{ paddingTop: "5px" }}>Description</label>
             <TextField
                id="outlined-textarea"
                label="Description"                
                multiline
                rows={4}
                sx={{width:'300px'}}
                name="P_dscrpt" onChange={formik.handleChange} value={formik.values.P_dscrpt}
             />
           </Stack>
        </Box>
        <Box sx={{width:'500px',height:'300px',backgroundColor:'#f7f7f5',padding:'10px'}}>
          <FormControlLabel label="sales" control={<Checkbox onChange={handleChangeSales}  checked={salesvalue}></Checkbox>}></FormControlLabel>
          <Stack direction="row" spacing={10}>
             <label style={{ paddingTop: "5px" }}>Selling Price</label>
             <TextField label="INR" size="small"name="Sales_price" onChange={formik.handleChange} value={formik.values.Sales_price} ></TextField>
           </Stack>
           <Stack direction="row" spacing={10} sx={{paddingTop:'15px'}}>
             <label style={{ paddingTop: "5px" }}>Description</label>
             <TextField
                id="outlined-textarea"
                label="Description"                
                multiline
                rows={4}
                sx={{width:'300px'}}
                name="S_dscrpt" onChange={formik.handleChange} value={formik.values.S_dscrpt}
             />
           </Stack>
        </Box>        
      </Stack>
      <Divider></Divider>
      <Stack sx={{ textAlign: 'center', margin:'10px'}}>
        <Box>
        <Button variant="contained" type="submit">Submit</Button>
        <Button sx={{margin:'10px'}} type="reset" onClick={()=>{formik.resetForm()}} variant="outlined">Reset</Button>
        </Box>        
      </Stack>
      </form>
    </div>
  );
}

export default AddProduct;

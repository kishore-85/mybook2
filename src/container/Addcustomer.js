import * as React from 'react';
import Button from '@mui/material/Button';
import { Field, Formik, useFormik } from "formik";
import {Stack,TextField,TypographyAddcustomer,Divider, Typography,Box} from '@mui/material';
import * as Yup from 'yup'
import Alert from '@mui/material/Alert';

function Addcustomer(){

    const validationSchema = Yup.object({
           email:Yup.string().required().email(),          
    })
    const formik = useFormik({
        initialValues:{
            cust_name:'',
            cmpy_name:'',
            email:'',
            phone_no:'',
            Address:'',
            City:'',
            state:'',
            Country:'',
            Pincode:''
        },
        onSubmit:(val)=>{
           console.log(val,'formvalues');
           formik.resetForm();
        },
        validationSchema 
    })

   
    return(
        <>
        <form onSubmit={formik.handleSubmit}>
       <Stack margin="14px" spacing={4}>
           
         <Stack direction="row">
                <Stack>
                    <label>Customer Name</label>
                </Stack>
                <Stack sx={{marginLeft:'25px'}}>
                <TextField label="Full name" size="small" name="cust_name" onChange={formik.handleChange} value={formik.values.cust_name} required></TextField>           
                </Stack>
         </Stack>
         <Stack direction="row">
                <Stack>
                    <label>Company Name</label>
                </Stack>
                <Stack sx={{marginLeft:'25px'}}>
                     <TextField  size="small" name="cmpy_name" onChange={formik.handleChange} value={formik.values.cmpy_name}  ></TextField>           
                    <Stack sx={{marginTop:'5px'}}>{ formik.touched.cmpy_name && formik.errors.cmpy_name?<Alert severity="error">company name is required.</Alert>:null} </Stack> 
                </Stack>
                
         </Stack>
         <Stack direction="row">
                <Stack>
                    <label>Customer Email</label>
                </Stack>
                <Stack sx={{marginLeft:'29px'}}>
                   <TextField  size="small" name="email" onChange={formik.handleChange} value={formik.values.email} required></TextField>  
                   <Stack sx={{marginTop:'5px'}}> 
                       {formik.touched.email && formik.errors.email?<Alert severity="error">Please enter valid email </Alert>:null}
                    </Stack>         
               
                </Stack>
               
         </Stack>
         <Stack direction="row">
                <Stack>
                    <label>Customer Phone</label>
                </Stack>
                <Stack sx={{marginLeft:'25px'}}>
                <TextField type="number" size="small" name="phone_no" onChange={formik.handleChange} value={formik.values.phone_no} ></TextField>           
                </Stack>
         </Stack>

         <Divider></Divider>

         <Typography variant='h5' sx={{color:'red'}}>ADDRESS:</Typography>
         <Stack direction="row">
                <Stack>
                    <label>Address:</label>
                </Stack>
                <Stack sx={{marginLeft:'25px'}}>
                <TextField
                id="outlined-textarea"
                label="Address"                
                multiline
                rows={4}
                sx={{width:'300px'}}
                name="Address" 
                onChange={formik.handleChange} value={formik.values.Address}
             />          
                </Stack>
         </Stack>

         <Stack direction="row">
                <Stack>
                    <label>City:</label>
                </Stack>
                <Stack sx={{marginLeft:'55px'}}>
                <TextField  size="small" name="City"  onChange={formik.handleChange} value={formik.values.City}></TextField> 
                </Stack>
         </Stack>
         <Stack direction="row">
                <Stack>
                    <label>state:</label>
                </Stack>
                <Stack sx={{marginLeft:'52px'}}>
                <TextField  size="small" name="state" onChange={formik.handleChange} value={formik.values.state}  ></TextField> 
                </Stack>
         </Stack>
         <Stack direction="row">
                <Stack>
                    <label>Country:</label>
                </Stack>
                <Stack sx={{marginLeft:'30px'}}>
                <TextField  size="small" name="Country" onChange={formik.handleChange} value={formik.values.Country}></TextField> 
                </Stack>
         </Stack>
         <Stack direction="row">
                <Stack>
                    <label>Pincode:</label>
                </Stack>
                <Stack sx={{marginLeft:'30px'}}>
                <TextField type="number" size="small" name="Pincode" onChange={formik.handleChange} value={formik.values.Pincode} ></TextField> 
                </Stack>
         </Stack>
         <Divider></Divider>
         <Stack sx={{ textAlign: 'center', margin:'10px'}} >
             <Box>
                <Button variant="contained" type="submit">Submit</Button>
                <Button sx={{margin:'10px'}} variant="outlined" onClick={()=>{formik.resetForm()}} type="reset">Reset</Button>
             </Box>
         </Stack>
               
       </Stack>
       </form>  
       </>
    )
}

export default Addcustomer;
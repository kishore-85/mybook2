import { Formik, useFormik } from "formik";
import * as Yup from 'yup'
function Addcustomer(){
const initialValues ={
      cust_name:'',
      email:'',
      contact_no:'',
      address:'',
      gst:'',
      placeofsupply:'',
      tax_type:''
}

const onSubmit = (values)=>{
  console.log(values,'values')
}

// const validate =(values)=>{
//   let errors ={}
//       if(!values.cust_name){
//           errors.cust_name = 'Customer name is required'
//       }
//       else if(values.cust_name.length <5){
//         errors.cust_name = 'customer name is not valid'
//       }
//       if(!values.email){
//           errors.email = 'email is required'
//       }
//       else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)){
//         errors.email = 'email is not valid'
//       }
//       if(!values.contact_no){
//           errors.contact_no = 'Contact number is required'
//       }
//       else if(values.contact_no.length<8){
//         errors.contact_no = 'contact number is not valid'
//       }
//       return errors
// }

    const validationSchema = Yup.object({
      cust_name: Yup.string().required('customer name is required'),
      email:Yup.string().email('Invalid email').required('email is required'),
      contact_no:Yup.number().required('enter no'),      
    })
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema

        // initialValues:{
        //     cust_name:'',
        //     email:'',
        //     contact_no:'',
        //     address:'',
        //     gst:'',
        //     placeofsupply:'',
        //     tax_type:''
        // },
        // onSubmit:(values)=>{
        //       console.log(values,'values')
        // },
        // validate:(values)=>{
        //     let errors ={}
        //     if(!values.cust_name){
        //         errors.cust_name = 'Customer name is required'
        //     }
        //     else if(values.cust_name.length <5){
        //       errors.cust_name = 'customer name is not valid'
        //     }
        //     if(!values.email){
        //         errors.email = 'email is required'
        //     }
        //     else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)){
        //       errors.email = 'email is not valid'
        //     }
        //     if(!values.contact_no){
        //         errors.contact_no = 'Contact number is required'
        //     }
        //     else if(values.contact_no.length<8){
        //       errors.contact_no = 'contact number is not valid'
        //     }
        //     return errors
        // }
        
    })

   
    return(
        <div>
        <p>Add customer screen...</p>
        <form onSubmit={formik.handleSubmit}>
            <div className="row-1">
              <div>
                <label htmlFor="cust_name">customer name:</label>
                <input type="text" name="cust_name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cust_name}></input>
                     {formik.touched.cust_name&&formik.errors.cust_name?<div className="errors">{formik.errors.cust_name}</div>:null}
              </div>
             <div>
               <label htmlFor="email">Email-Id:</label>
               <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></input>
               {formik.touched.email&&formik.errors.email?<div className="errors">{formik.errors.email}</div>:null}
             </div>
             <div>
               <label htmlFor="contact_no">Contact no</label>
               <input type="text" name="contact_no" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.contact_no}></input>
               {formik.touched.contact_no &&formik.errors.contact_no?<div className="errors">{formik.errors.contact_no}</div>:null}
             </div>
            <div>
               <label htmlFor="address">Address</label>
               <input type="text" name="address" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address}></input>
               {/* {formik.touched.address?<div>formik.errors.address</div>:null} */}
            </div>            
            </div>

            <div className="row-2">
             <label htmlFor="gst">GST:</label>
               <input type="text" name="gst" onChange={formik.handleChange} value={formik.values.gst}></input>
             <label htmlFor="placeofsupply">Place of Supply:</label>
               <input type="text" name="placeofsupply" onChange={formik.handleChange} value={formik.values.placeofsupply}></input>
             <label htmlFor="tax_type">Tax preference :</label>
               <input type="text" name="tax_type" onChange={formik.handleChange} value={formik.values.tax_type}></input>
            </div>

            <button type="submit">submit</button>
        </form>
       
        </div>
    )
}

export default Addcustomer;
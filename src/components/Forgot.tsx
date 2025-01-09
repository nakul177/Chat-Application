import { useState } from "react";
import {forgotPasswordFields} from "../constants/formFields.ts";
import Input from "./Input.tsx";
import FormAction from "./FormAction.tsx";

const fields= forgotPasswordFields;
const fieldsState:any = {};
fields.forEach((field:any) => fieldsState[field.id]='');

export default function Forgot  (){

   const [forgotPassword,setForgotPassword]= useState(fieldsState);

   const handleChange = (e:any) =>{
       setForgotPassword({...forgotPassword , [e.target.id]:e.target.value});
       console.log("forgotPassword" , forgotPassword)
   }

   const handleSubmit = (e:any) =>{
       e.preventDefault();
       sendOtpToEmail();
   }

  const sendOtpToEmail = () =>{}


    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
         <div className="-space-y-px">
             {fields.map((field:any)=>(
                 <Input
                           key={field.id}
                            handleChange={handleChange}
                            value={forgotPassword[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            />
             ))}
             </div>
            <FormAction handleSubmit={handleSubmit} text="Reset Password" />
        </form>
    )
}



//
// const fields= loginFields;
// let fieldsState :any = {};
// fields.forEach((field:any)=>fieldsState[field.id]='');
//
// export default function Login(){
//     const [loginState,setLoginState]=useState(fieldsState);
//
//     const handleChange=(e:any)=>{
//         setLoginState({...loginState,[e.target.id]:e.target.value})
//     }
//
//     const handleSubmit=(e:any)=>{
//         e.preventDefault();
//         authenticateUser();
//     }
//
//     //Handle Login API Integration here
//     const authenticateUser = () =>{
//
//     }
//
//     return(
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="-space-y-px">
//                 {
//                     fields.map((field:any)=>
//                         <Input
//                             key={field.id}
//                             handleChange={handleChange}
//                             value={loginState[field.id]}
//                             labelText={field.labelText}
//                             labelFor={field.labelFor}
//                             id={field.id}
//                             name={field.name}
//                             type={field.type}
//                             isRequired={field.isRequired}
//                             placeholder={field.placeholder}
//                         />
//
//                     )
//                 }
//             </div>
//
//             <FormExtra/>
//             <FormAction handleSubmit={handleSubmit} text="Login"/>
//
//         </form>
//     )
// }
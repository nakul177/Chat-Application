import { useState } from "react";
import {forgotPasswordFields} from "../constants/formFields.ts";
import Input from "./Input.tsx";
import FormAction from "./FormAction.tsx";
import { useNavigate } from "react-router-dom";
import { AUTHROUTES } from "../routes/routes.ts";

const fields= forgotPasswordFields;
const fieldsState:any = {};
fields.forEach((field:any) => fieldsState[field.id]='');

export default function Forgot  (){
    const navigate = useNavigate();

   const [forgotPassword,setForgotPassword]= useState(fieldsState);

   const handleChange = (e:any) =>{
       setForgotPassword({...forgotPassword , [e.target.id]:e.target.value});
   }

   const handleSubmit = (e:any) =>{
       e.preventDefault();
       sendOtpToEmail();
   }

  const sendOtpToEmail = () =>{
    navigate(AUTHROUTES.VERIFICATION)
  }


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



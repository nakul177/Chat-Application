import { useState } from 'react';
import FormAction from "./FormAction";
import Input from "./Input";
import { resetPasswordFields } from '../constants/formFields';

const fields:any = resetPasswordFields;
let fieldsState :any={};

fields.forEach((field:any) => fieldsState[field.id]='');

export default function ResetPassword(){
    const [resetPasswordState,setResetPasswordState]=useState(fieldsState);

    const handleChange=(e:any)=>setResetPasswordState({...resetPasswordState,[e.target.id]:e.target.value});

    const handleSubmit=(e:any)=>{
        e.preventDefault();
      
        resetPassword();
    }

    //handle Signup API Integration here
    const resetPassword=()=>{

    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map((field:any)=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={resetPasswordState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
                <FormAction handleSubmit={handleSubmit} text="Set a new Password" />
            </div>
        </form>
    )
}
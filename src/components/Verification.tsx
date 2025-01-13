import { useNavigate } from "react-router-dom";
import { otpLength } from "../constants/formFields"
import OTPInput from "./OtpInput";
import { AUTHROUTES } from "../routes/routes";

export default function Verification() {
    const navigate = useNavigate()
    const onChange = (otp: any) => {
        console.log("otp", otp)
    }
    const handleSubmit = (e:any) =>{
         e.preventDefault();
        navigate(AUTHROUTES.RESETPASSWORD)
    }

    return (
       <>
        <OTPInput length={otpLength} onChange={onChange} handleSubmit={handleSubmit} />
       </>
       
    )
}
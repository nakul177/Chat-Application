import Header from "../components/Header";
import Signup from "../components/Signup";
import {AUTHROUTES} from "../routes/routes.ts";

export default function SignupPage(){
    return(
        <>
            <Header
                heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl={AUTHROUTES.LOGIN}
            />
            <Signup/>
        </>
    )
}
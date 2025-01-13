import Header from "../../components/Header.tsx";
import Login from "../../components/Login.tsx";
import {AUTHROUTES} from "../../routes/routes.ts";

const LoginPage = () =>{
    return (
       <>
           <Header
               heading="Login to your account"
               paragraph="Don't have an account yet? "
               linkName="Signup"
               linkUrl={AUTHROUTES.SIGNUP}
           />
           <Login/>
       </>
    );
}

export default LoginPage;
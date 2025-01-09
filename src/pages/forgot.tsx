import Header from "../components/Header.tsx";
import Forgot from "../components/Forgot.tsx";

const ForgotPage = () => {
    return (
        <>
            <Header
                heading="Forget Password"
                paragraph="Enter your email account to reset password"
            />
            <Forgot/>
        </>
    )
}

export default ForgotPage
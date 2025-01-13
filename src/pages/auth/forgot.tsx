import Header from "../../components/Header.tsx";
import Forgot from "../../components/Forgot.tsx";

const ForgotPage = () => {
    return (
        <>
            <Header
                heading="Forget Password"
                paragraph="Don't worry! It happens. Please enter the address associated with account."
            />
            <Forgot/>
        </>
    )
}

export default ForgotPage
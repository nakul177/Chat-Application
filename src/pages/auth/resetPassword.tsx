import Header from "../../components/Header";
import ResetPassword from "../../components/ResetPassword";

const ResetPasswordPage = () => {
    return (
        <>
            <Header
                heading="Set New Password"
                paragraph="Please, enter a new password below"
            />
            <ResetPassword />
        </>
    )
}

export default ResetPasswordPage;
import Header from "../../components/Header"
import Verification from "../../components/Verification"

const VerificationPage = () => {
    return (
        <>
            <Header
                heading="Email Verification"
                paragraph="Enter the 4-digit verification code that was sent to your email"
            />
          <Verification/>
        </>

    )
}

export default VerificationPage
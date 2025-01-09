import {Outlet} from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle.tsx";

const AuthLayout = () => {
    return (
        <>
        <ThemeToggle/>
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="flex bg-surface rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full md:h-fit h-screen items-center">
                {/*left section */}
                <div className="w-1/2 relative hidden md:block">
                    <div className="p-3 w-full h-full">
                        <img className="w-full h-full object-fill rounded-xl" alt="image"
                             src="../../../public/images/auth.jpg"/>
                    </div>
                </div>

                {/*right section*/}
                <div className="w-full md:w-1/2 md:p-3 p-6  "><Outlet/></div>
            </div>
        </div>

</>
)
    ;
};

export default AuthLayout;

import { Outlet } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle.tsx";

const AuthLayout = () => {
    return (
        <>
            <ThemeToggle/>
            <Outlet />
        </>
    );
};

export default AuthLayout;

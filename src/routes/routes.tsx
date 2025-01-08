import {Navigate, useRoutes} from "react-router-dom";
import {lazy, Suspense} from "react";
import LoadingScreen from "../components/Loading.tsx";
import AuthLayout from "../layout/auth";


const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props} />
        </Suspense>
    );
};

const Routes = () => {
    return useRoutes([
        {
            path: "/auth",
            element: <AuthLayout/>,
            children: [
                {
                    path: "login",
                    element: <LoginPage/>
                },{
                path:"signup",
                element : <SignUpPage/>
                }
            ]
        },
        {
            path: "/",
            element: <Navigate to="/auth/login" replace/>,  // Redirect root to /auth/login
        },
    ]);
}


const LoginPage = Loadable(lazy(() => import("../pages/login.tsx")));
const SignUpPage = Loadable(lazy(() => import("../pages/signup.tsx")));
export default Routes;

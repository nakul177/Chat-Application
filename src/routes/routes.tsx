import { Navigate, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingScreen from "../components/Loading.tsx";
import AuthLayout from "../layout/auth";
import Main from "../layout/main/index.tsx";

const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );
};

const Routes = () => {
    return useRoutes([
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "login",
                    element: <LoginPage />
                }, {
                    path: "signup",
                    element: <SignUpPage />
                }, {
                    path: "forgot-password",
                    element: <ForgotPage />
                },
                {
                    path: "verify",
                    element: <Verification />
                }, {
                    path: "reset-password",
                    element: <ResetPassword />
                }
            ]
        },
         {
            path: "/",
            element: <Main />,
            children: [
                { element: <Navigate to={"/app"} replace />, index: true },
                { path: "app", element: <GeneralApp /> },
            ]
        },
    ]);
}

// auth pages lazy 
const LoginPage = Loadable(lazy(() => import("../pages/auth/login.tsx")));
const SignUpPage = Loadable(lazy(() => import("../pages/auth/signup.tsx")));
const ForgotPage = Loadable(lazy(() => import("../pages/auth/forgot.tsx")))
const Verification = Loadable(lazy(() => import("../pages/auth/verification.tsx")))
const ResetPassword = Loadable(lazy(() => import("../pages/auth/resetPassword.tsx")))


//App pages lazy 

const GeneralApp = Loadable(lazy(() => import("../pages/main/GeneralApp.tsx")))


export default Routes;

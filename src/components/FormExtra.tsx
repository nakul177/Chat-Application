import {Link} from "react-router-dom";
import {AUTHROUTES} from "../routes/routes.ts";

export default function FormExtra(){
    return(
        <div className="flex items-center justify-end w-full">
            <div className="text-sm">
                <Link to={AUTHROUTES.FORGOT_PASSWORD} className="font-medium text-link hover:linkHover ">
                    Forgot password?
                </Link>
            </div>
        </div>

    )
}
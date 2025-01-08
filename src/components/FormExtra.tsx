export default function FormExtra(){
    return(
        <div className="flex items-center justify-between ">
            <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4  focus:text border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-text-inverse">
                    Remember me
                </label>
            </div>

            <div className="text-sm ">
                <a href="#" className="font-medium text-linkInverse hover:linkHover ">
                    Forgot your password?
                </a>
            </div>
        </div>

    )
}
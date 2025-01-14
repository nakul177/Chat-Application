import { NAVBARHEIGHT } from "../../config";

const NavBar = () => {
    return (
        <header className="w-100 h-12 bg-surface" style={{height:NAVBARHEIGHT}}>
           <div className="h-full flex pl-12 items-center gap-3">
             {/* <img className="w-10  object-contain" src="../../../public/images/auth.jpg" alt="public" /> */}
              <span className="font-normal text-text">Chat App</span>
           </div>
        </header>
    )
}

export default NavBar;
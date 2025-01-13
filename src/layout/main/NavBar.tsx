import { SIDEBARWIDTH } from "../../config";

const NavBar = () => {
    return (
        <header className="w-100  h-10 bg-surface">
           <div className="flex  items-center gap-3">
             {/* <img className="w-10  object-contain" src="../../../public/images/auth.jpg" alt="public" /> */}
              <span className="text-title-size text-text">Chat App</span>
           </div>
        </header>
    )
}

export default NavBar;
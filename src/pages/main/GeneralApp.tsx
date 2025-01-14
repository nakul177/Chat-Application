import { NAVBARHEIGHT } from "../../config"

const GeneralApp = () =>{
    return (
          <div style={{height:`calc(100vh - ${NAVBARHEIGHT})`}} className="rounded-tl-lg"></div>
    )
}

export default GeneralApp
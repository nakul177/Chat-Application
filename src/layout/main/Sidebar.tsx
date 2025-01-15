import { useState } from "react";
import Nav_Buttons from "../../data";
import { Button } from "@nextui-org/react";
import { NAVBARHEIGHT } from "../../config";
import { Settings } from "lucide-react";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="h-full justify-between md:flex flex-col hidden w-sideBarWidth items-center bg-surface">


      <div className="flex flex-col  items-center gap-3 relative ">
        <div
          className="absolute rounded-full transition-all"
          style={{
            top: `${activeTab * 52}px`, // Adjust based on your button spacing
            left: "-3.5px",
            width: "5px",
            height: "40px",
            backgroundColor: "var(--color-primary)",
            animation: "stretchShift 0.6s ease-out",
          }}
        ></div>
        {Nav_Buttons.map(({ index, icon: Icon }) => (
          <div key={index} className="flex items-center relative">
            <Button className="hover:none" onPress={() => setActiveTab(index)} key={index} isIconOnly aria-label={Icon.toString()} variant="light" disableAnimation={true}>
              <Icon key={index} strokeWidth={activeTab === index ? 1.5 : 1} />
            </Button>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes stretchShift {
          0% {
            height: 20px;
          }
          50% {
            height: 40px;
          }
          100% {
            top: ${activeTab * 60}px; 
            height: 40px;
          }
        }
      `}</style>

      <div style={{paddingBottom :'20px'}} className="flex flex-col  items-center gap-3 relative">
        <Button className="hover:none" isIconOnly aria-label='setting' variant="light" disableAnimation={true}>
          <Settings strokeWidth={1} />
        </Button>
        <img src="https://images.pexels.com/photos/3214772/pexels-photo-3214772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-8 h-8 rounded-full object-cover cursor-pointer"  alt="User dropdown" />

      </div>
    </div>
  )
}

export default SideBar;
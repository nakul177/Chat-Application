import { useState } from "react";
import Nav_Buttons from "../../data";
import { Button } from "@nextui-org/react";
import { NAVBARHEIGHT } from "../../config";

const SideBar = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className="h-screen md:flex flex-col hidden w-sideBarWidth items-center bg-surface">


            <div className="flex flex-col  items-center gap-3 relative ">
                <div
                    className="absolute rounded-full transition-all"
                    style={{
                        top: `${activeTab * 50}px`, // Adjust based on your button spacing
                        left: "-3.5px",
                        width: "5px",
                        height: "40px",
                        backgroundColor: "var(--color-primary)",
                        animation: "stretchShift 0.6s ease-out",
                    }}
                ></div>
                {Nav_Buttons.map(({ index, icon: Icon }) => (
                    <div key={index} className="flex items-center relative">
                        <Button onPress={() => setActiveTab(index)} key={index} isIconOnly aria-label={Icon.toString()} variant="light" disableAnimation={true}>
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
        </div>
    )
}

export default SideBar;
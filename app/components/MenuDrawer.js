import MenuItems from "./MenuItems";
import { useTheme } from "next-themes";

export default function MenuDrawer({setIsOpen}) {

    const{theme} = useTheme();

    return (
        <div className={`w-screen h-screen 
        ${theme=='dark'?'bg-black/95':'bg-white/95'}
        z-20 absolute top-0 left-0 flex flex-col pl-14 justify-center gap-12`}>
            <MenuItems setIsOpen={setIsOpen}/>
        </div>
    );
}
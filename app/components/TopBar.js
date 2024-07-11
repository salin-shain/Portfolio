'use client'
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import MenuItems from "./MenuItems";
import MenuDrawer from "./MenuDrawer";
import { Turn as Hamburger } from 'hamburger-react'
import SocialLinks from "./socialLinks";

export default function Topbar(){
    
    const {theme, setTheme} = useTheme('dark');
    const[mounted, setMounted] = useState(false);
    const[isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[])

    if(!mounted) return null;
    
    return(
        <div className="fixed flex w-screen py-6 md:pt-14 md:pb-6 items-center backdrop-blur-xl z-10">
            <SocialLinks />
            <div className="w-4/5 md:min-w-1/2 flex flex-wrap">
                <span className="font-bold text-sm md:text-xl ml-8 md:ml-24">Salin Shain</span>
            </div>
            <div className="flex justify-end items-center pl-12 md:px-12">
                <div className="hidden md:block"><MenuItems/></div>
                <button 
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {theme === 'light' ? '🌛' : '🌞'}
                </button>
                <div className="md:hidden mx-4 z-50">
                    <Hamburger 
                        toggled={isOpen} toggle={()=>setIsOpen(!isOpen)}
                        size={24}
                    />
                </div>
                {isOpen?<MenuDrawer setIsOpen={setIsOpen}/>:undefined}
            </div>
        </div>
    )
}
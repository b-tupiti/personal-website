'use client'
import { MoonIcon, SunIcon } from "@/icons/icons";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => setMounted(true), [])

    if(!mounted){

    }

    let toggle = () => {
        if(resolvedTheme === 'dark'){
            setTheme('light');
        }
    
        if(resolvedTheme === 'light'){
            setTheme('dark');
        }
    }

    

    return ( 
        <div className="dark:bg-slate-800 bg-slate-200 w-16 p-2 rounded-full cursor-pointer" onClick={toggle}>
            <div className="grid rounded-full w-fit  outline-slate-200 outline-[.5px] dark:ml-auto">
                <SunIcon className="text-dark size-6 col-start-1 row-start-1 block dark:hidden"/>
                <MoonIcon  className="text-white size-[1.3rem] col-start-1 row-start-1 hidden dark:block"/>
            </div>
        </div>
     );
}

export default ThemeToggle;
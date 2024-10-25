import Image from "next/image";
import logoDark from "@/assets/bt-dark.svg";
import logoLight from "@/assets/bt-light.svg";

function Logo() {
    return ( 
        <div className="animate-fadein my-auto font-extrabold text-3xl flex">
            <Image className="w-16 hidden dark:block" src={logoDark} alt={'logo'}/>            
            <Image className="w-16 dark:hidden" src={logoLight} alt={'logo'}/>            
        </div>
     );
}

export default Logo;
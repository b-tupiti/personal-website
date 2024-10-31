import Image from "next/image";
import Link from "next/link";
import logoDark from "@/assets/bt-dark.svg";
import logoLight from "@/assets/bt-light.svg";


function Logo() {
    return ( 
        <Link href={'/'}>
            <Image className="w-16 hidden dark:block" src={logoDark} alt={'logo'}/>            
            <Image className="w-16 dark:hidden" src={logoLight} alt={'logo'}/>            
        </Link>
     );
}

export default Logo;
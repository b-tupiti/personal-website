import Image from "next/image";
import avatarImg from "@/assets/avatar.png";

function Avatar() {
    return (  
        <Image 
            className="object-fit rounded-full"
            src={avatarImg} 
            alt={'my-avatar'}
            width={180}
        />
    );
}

export default Avatar;


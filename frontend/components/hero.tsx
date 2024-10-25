import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/avatar.png";

function Hero(props: any) {
    return (
        <main 
            className="py-6 bg-[#f4f4f4] dark:bg-dark lg:py-12 lg:pb-4"
            >
            <Container>
                
                <div 
                    className="flex flex-col p-6 lg:px-20 lg:flex-row items-center lg:justify-center xl:justify-start  gap-10 lg:gap-28"
                    >
                    
                    <div className="w-32">
                        <Image 
                            className="scale-125 object-fit rounded-full"
                            src={avatar} 
                            alt={''}/>
                    </div>
                    
                    <div className=" flex flex-col gap-4 lg:gap-8  items-start justify-start xl:gap-12 xl:-mt-8 ">
                        <h1 className="text-4xl lg:text-5xl dark:text-white text-dark  font-extrabold text-center sm:text-left  w-full">Brandon Tupiti</h1>
                        <p className="text-center dark:text-white text-dark">
                        Software Developer / UIUX Designer.
                        </p>
                    </div>

                </div>
                
                <div 
                    className="mt-4 p-6 flex justify-center xl:justify-start lg:px-20  gap-4 lg:gap-10"
                    >
                   <Link 
                        href={''} 
                        className="capitalize border-b border-slate-700  py-4 dark:text-white text-dark"
                        >
                        github
                    </Link>
                    <Link 
                        href={''} 
                        className="capitalize border-b border-slate-700  py-4 dark:text-white text-dark"
                        >
                        linkedIn
                    </Link>
                    <Link 
                        href={''} 
                        className="capitalize border-b border-slate-700  py-4 dark:text-white text-dark"
                        >
                        resume
                    </Link>
                </div>

            </Container>
        </main>
    );
}

export default Hero;
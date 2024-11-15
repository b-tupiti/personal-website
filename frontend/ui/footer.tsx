import { ReactNode } from "react";

const Footer = ({children}: {children: ReactNode}) => {
    return ( 
        <footer className="dark:bg-dark bg-[#fffefe] ">
            <div className="max-w-[720px] m-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center pt-16 py-12 pb-8 ">
                    {children}
                </div>
            </div>
        </footer>
     );
}

export default Footer;
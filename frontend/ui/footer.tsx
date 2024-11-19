import { ReactNode } from "react";
import Container from "./container";

type FooterProps = {
    children: ReactNode
}
const Footer = ({children}: FooterProps) => {
    return ( 
        <footer 
            className="dark:bg-dark bg-[#fffefe]"
            >
            <Container 
                className="max-w-[720px]"
                >
                <div
                     className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center pt-16 py-12 pb-8"
                     >
                    {children}
                </div>
            </Container>
        </footer>
     );
}

export default Footer;
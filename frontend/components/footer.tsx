import Container from "../ui/container";
import TextXS from "../ui/text-xs";

const Footer = () => {
    const year = new Date().getFullYear();

    return ( 
        <footer className="dark:bg-dark bg-[#fffefe]">
            <Container className="max-w-[720px]">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center pt-16 py-12 pb-8">
                    <TextXS>
                        All rights reserved. &copy;  Brandon Tupiti {year}
                    </TextXS>
                    <TextXS>
                        Powered by AWS Fargate
                    </TextXS>
                </div>
            </Container>
        </footer>
     );
}

export default Footer;
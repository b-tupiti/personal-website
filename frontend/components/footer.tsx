import Container from "./container";

function Footer() {
    return ( 
        <footer className="dark:bg-dark bg-[#f4f4f4] ">
            <Container>
                <div className="flex flex-col lg:flex-row gap-1 justify-between p-6 py-8">
                    <small className="dark:text-slate-400 text-slate-700">All rights reserved. &copy;  Brandon Tupiti 2023</small>
                    <small className="dark:text-slate-400 text-slate-700">Powered by AWS Fargate</small>
                </div>
            </Container>
            
        </footer>
     );
}

export default Footer;
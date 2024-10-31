import Container from "./container";

function Footer(props: any) {
    return ( 
        <footer className="dark:bg-dark bg-[#f4f4f4] ">
            <Container>
                <div className="flex flex-col lg:flex-row gap-1 justify-between p-6 py-8">
                    {props.children}
                </div>
            </Container>
        </footer>
     );
}

export default Footer;
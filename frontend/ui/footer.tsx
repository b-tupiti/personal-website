import Container from "./container";

function Footer(props: any) {
    return ( 
        <footer className="dark:bg-dark bg-[#fffefe] ">
            <div className="max-w-[720px] m-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center pt-16 py-12 pb-8 ">
                    {props.children}
                </div>
            </div>
        </footer>
     );
}

export default Footer;
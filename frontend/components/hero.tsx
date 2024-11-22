import Avatar from "@/components/avatar";
import Bio from "@/components/bio";
import Container from "@/ui/container";

const Hero = () => {
    return (
        <main 
            className="bg-[#fffefe] dark:bg-dark py-8"
            >
            <Container className="max-w-[720px]">
                <div 
                    className="flex flex-col items-center gap-16 lg:flex-row lg:py-16"
                >
                    <Avatar/>       
                    <Bio/>
                </div>
            </Container>
        </main>
    );
}

export default Hero;
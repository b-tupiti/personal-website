import Avatar from "@/components/avatar";
import Bio from "@/components/bio";
import HandlesAndResume from "@/components/handles-n-resume";
import Container from "@/ui/container";
import FlexBox from "@/ui/flexbox";

function HeroSection() {
    return (
        <main 
            className="bg-[#f4f4f4] dark:bg-dark"
            >
            <Container>
                <div 
                    className="flex flex-col items-center gap-16 px-4 lg:flex-row  xl:pr-16  lg:px-8 lg:py-16  xl:gap-16 "
                >
                    <Avatar/>       
                    <Bio/>
                    <HandlesAndResume/>  
                </div>
            </Container>
        </main>
    );
}

export default HeroSection;
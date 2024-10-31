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
                <FlexBox 
                    twstyle="flex flex-col lg:flex-row items-center gap-16 p-12 xl:pr-16  lg:px-8 lg:py-16  xl:gap-16 "
                >
                    <Avatar/>       
                    <Bio/>
                    <HandlesAndResume/>  
                </FlexBox>  
                
            </Container>
        </main>
    );
}

export default HeroSection;
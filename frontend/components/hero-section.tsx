import Avatar from "@/components/avatar";
import Bio from "@/components/bio";
import HandlesAndResume from "@/components/handles-n-resume";
import Container from "@/ui/container";
import FlexBox from "@/ui/flexbox";

function HeroSection() {
    return (
        <main 
            className="bg-[#fffefe] dark:bg-dark py-8"
            >
            <div className="max-w-[720px] m-auto">
                <div 
                    className="flex flex-col items-center gap-16  lg:flex-row     lg:py-16   "
                >
                    <Avatar/>       
                    <Bio/>
                </div>
            </div>
        </main>
    );
}

export default HeroSection;
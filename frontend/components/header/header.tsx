import { ReactNode } from "react";
import Container from "../../ui/container";
import FlexBox from "../../ui/flexbox";
import BTLogo from "./bt-logo";
import HandlesAndResume from "./handles-n-resume";
import { Providers } from "@/app/theme-provider";
import ThemeToggle from "./theme-toggle";

const Header = () => {
    return (  
      <header className=' dark:bg-dark bg-[#fffefe]'>
        <Container>
          <FlexBox twstyle="flex justify-between items-center p-8 lg:px-16"> 
            <BTLogo/>
            <HandlesAndResume/>  
            <Providers>
              <ThemeToggle/>
            </Providers>
          </FlexBox>
        </Container>
      </header>
    );
}

export default Header;
 
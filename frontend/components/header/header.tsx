import Container from "../../ui/container";
import FlexBox from "../../ui/flexbox";
import Logo from "./logo";
import NavLinks from "./nav-links";
import { Providers } from "@/app/theme-provider";
import ThemeToggle from "./theme-toggle";

const Header = () => {
    return (  
      <header className=' dark:bg-dark bg-[#fffefe]'>
        <Container>
          <FlexBox twstyle="flex justify-between items-center p-8 lg:px-16"> 
            <Logo/>
            <NavLinks/>  
            <Providers>
              <ThemeToggle/>
            </Providers>
          </FlexBox>
        </Container>
      </header>
    );
}

export default Header;
 
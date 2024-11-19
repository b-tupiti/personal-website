import { ReactNode } from "react";
import Container from "../ui/container";
import FlexBox from "../ui/flexbox";

const Header = ({children}: {children: ReactNode}) => {
    return (  
      <header className=' dark:bg-dark bg-[#fffefe]'>
        <Container>
          <FlexBox twstyle="flex justify-between items-center p-8 lg:px-16"> 
            {children}
          </FlexBox>
        </Container>
      </header>
    );
}

export default Header;
 
import Container from "./container";
import FlexBox from "./flexbox";

function Header(props: any) {
    return (  
      <header className=' dark:bg-dark bg-[#fffefe]'>
        <Container>
          <FlexBox twstyle="flex justify-between items-center p-8 lg:px-16"> 
            {props.children}
          </FlexBox>
        </Container>
      </header>
    );
}

export default Header;
 
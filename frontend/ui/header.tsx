import Container from "./container";
import FlexBox from "./flexbox";

function Header(props: any) {
    return (  
      <header className={`shadow-md ${props.colorScheme}`}>
        <Container>
          <FlexBox twstyle="flex justify-between items-center p-8 lg:px-16"> 
            {props.children}
          </FlexBox>
        </Container>
      </header>
    );
}

export default Header;
 
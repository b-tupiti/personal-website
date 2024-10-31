import Container from "./container";

function Header(props: any) {
    return (  
      <header className={`shadow-md ${props.colorScheme}`}>

        {props.children}

      </header>
    );
}

export default Header;
 
import Container from "./container";


function Header(props: any) {
    return (  
      <header className="shadow-md  justify-between bg-[#f4f4f4] dark:bg-dark ">
          <Container>
            <div className="flex justify-between p-6">
              {props.children}
            </div>
          </Container>
      </header>
    );
}

export default Header;
 
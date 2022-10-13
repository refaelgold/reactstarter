import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useTranslation} from "react-i18next";


const NavbarComponent = () => {
    const {t} = useTranslation();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src='images/logo.png' height={50} alt=''/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#home">{t("Home")}</Nav.Link>*/}
                        <Nav.Link href="#link">{t("Link")}2</Nav.Link>
                        <Nav.Link href="#link">{t("Link")}3</Nav.Link>
                        <Nav.Link href="/faq" >
                            {t("FAQ")}
                        </Nav.Link>
                        <Nav.Link href="/react_official_tutorial" >
                            {t("ReactJS official Tutorial")}
                        </Nav.Link>
                        <Nav.Link href="/tailwind_tutorial" >
                            {t("TailWind Tutorial")}
                        </Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;

/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "./HeaderCartButton";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <Navbar bg="light" fixed="top" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"}>Hypershopping</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link
                            to={"/"}
                            role={"button"}
                            className={"nav-link"}
                            data-rr-ui-event-key={"/"}
                            tabIndex={"0"}
                        >
                            Home
                        </Link>
                        <Nav.Link href="#">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <HeaderCartButton cartHandler={props.cartHandler} />
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

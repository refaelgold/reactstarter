import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    FooterLi,
    FooterLink,
    Heading,
    FooterContainer
} from "../Styles/FooterStyles";

const Footer = () => {
    return (
        <FooterContainer>
            <Container fluid className={'bg-dark footer'}>
                <h1 style={{
                    color: "green",
                    textAlign: "center",
                }}>
                    GeeksforGeeks: A Computer Science Portal for Geeks
                </h1>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Heading>About Us</Heading>
                        <FooterLi><FooterLink href="#">Aim</FooterLink></FooterLi>
                        <FooterLi><FooterLink href="#">Vision</FooterLink></FooterLi>
                        <FooterLi><FooterLink href="#">Testimonials</FooterLink></FooterLi>
                    </Col>
                    <Col>
                        <Heading>Services</Heading>
                        <FooterLi><FooterLink href="#">Writing</FooterLink></FooterLi>
                        <FooterLi><FooterLink href="#">Internships</FooterLink></FooterLi>
                        <FooterLi><FooterLink href="#">Coding</FooterLink></FooterLi>
                        <FooterLi><FooterLink href="#">Teaching</FooterLink></FooterLi>
                    </Col>
                    <Col>
                        <Heading>Contact Us</Heading>
                        <FooterLi><FooterLink href="#">Uttar Pradesh</FooterLink></FooterLi>
                        <FooterLi><FooterLink href="#">Ahemdabad</FooterLink></FooterLi>
                        <FooterLi><FooterLink href="#">Indore</FooterLink></FooterLi>
                        <FooterLi><FooterLink href="#">Mumbai</FooterLink></FooterLi>
                    </Col>
                    <Col>
                        <Heading>Social Media</Heading>
                        <FooterLi>
                            <FooterLink href="#">
                                <i className="fab fa-facebook-f">
                            <span style={{marginLeft: "10px"}}>
                              Facebook
                            </span>

                                </i>
                            </FooterLink>
                        </FooterLi>
                        <FooterLi>

                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                <span style={{marginLeft: "10px"}}>
                  Instagram
                </span>
                                </i>
                            </FooterLink>
                        </FooterLi>
                        <FooterLi>

                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                <span style={{marginLeft: "10px"}}>
                  Twitter
                </span>
                                </i>
                            </FooterLink>
                        </FooterLi>
                        <FooterLi>

                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                <span style={{marginLeft: "10px"}}>
                  Youtube
                </span>
                                </i>
                            </FooterLink>
                        </FooterLi>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </FooterContainer>
    );
};
export default Footer;

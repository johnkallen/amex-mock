import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>ABOUT</Heading>
            <FooterLink href="#">About American Express</FooterLink>
            <FooterLink href="#">Investor Relations</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Investor Relations</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Amex Mobile App</FooterLink>
          </Column>
          <Column>
            <Heading>PRODUCTS & SERVICES</Heading>
            <FooterLink href="#">Credit Cards</FooterLink>
            <FooterLink href="#">Business Credit Cards</FooterLink>
            <FooterLink href="#">Corporate Programs</FooterLink>
            <FooterLink href="#">Prepaid Cards</FooterLink>
            <FooterLink href="#">Savings Accounts & CDs</FooterLink>
            <FooterLink href="#">Gift Cards</FooterLink>
          </Column>
          <Column>
            <Heading>LINKS YOU MAY LIKE</Heading>
            <FooterLink href="#">Membership Rewards</FooterLink>
            <FooterLink href="#">Free Credit Score & Report</FooterLink>
            <FooterLink href="#">CreditSecure®</FooterLink>
            <FooterLink href="#">Bluebird</FooterLink>
            <FooterLink href="#">Accept Amex Cards</FooterLink>
            <FooterLink href="#">Refer A Friend</FooterLink>
          </Column>
          <Column>
            <Heading>ADDITIONAL INFORMATION</Heading>
            <FooterLink href="#">Credit Intel – Financial Education Center</FooterLink>
            <FooterLink href="#">Supplier Diversity</FooterLink>
            <FooterLink href="#">Credit Score 101</FooterLink>
            <FooterLink href="#">Money Management 101</FooterLink>
            <FooterLink href="#">US Newcomers</FooterLink>
            <FooterLink href="#">Frequently Asked Questions</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
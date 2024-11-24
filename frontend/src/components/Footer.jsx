import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Accordion, Image } from "react-bootstrap"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { path: "/about", text: "About Us" },
    { path: "/careers", text: "Careers" },
    { path: "/sell", text: "Sell at PharmEasy" },
  ]

  const serviceLinks = [
    { path: "/order-medicine", text: "Order Medicine" },
    { path: "/healthcare-products", text: "Healthcare Products" },
    { path: "/lab-tests", text: "Lab Tests" },
    { path: "/collection-centre", text: "Find Nearest Collection Centre" },
  ]

  const categoryLinks = [
    { path: "/category/personal-care", text: "Personal Care" },
    { path: "/category/healthcare", text: "Healthcare" },
    { path: "/health-food-drinks", text: "Health Food and Drinks" },
    { path: "/category/makeup", text: "Beauty" },
    { path: "/category/mother-care", text: "Mother & Baby Care" },
    { path: "/category/healthcare", text: "Ayurvedic" },
    { path: "/category/home", text: "Home Essentials" },
    { path: "/category/sexual-wellness", text: "Sexual Wellness" },
  ]

  const helpLinks = [
    { path: "/", text: "Browse All Medicines" },
    { path: "/", text: "Browse All Molecules" },
    { path: "/", text: "Browse All Categories" },
    { path: "/", text: "Browse All Cities" },
  ]

  const paymentIcons = [
    {
      src: "https://assets.pharmeasy.in/apothecary/images/gpay.png",
      alt: "Google Pay",
    },
    {
      src: "https://assets.pharmeasy.in/apothecary/images/paytm.png",
      alt: "Paytm",
    },
    {
      src: "https://assets.pharmeasy.in/apothecary/images/phonepe.png",
      alt: "PhonePe",
    },
    {
      src: "https://assets.pharmeasy.in/apothecary/images/amazon.png",
      alt: "Amazon Pay",
    },
    {
      src: "https://assets.pharmeasy.in/apothecary/images/mastercard.png",
      alt: "Mastercard",
    },
    {
      src: "https://assets.pharmeasy.in/apothecary/images/rupay.png",
      alt: "Rupay",
    },
  ]

  return (
    <Container fluid className="bg-light py-5">
      <Container className="footer-content">
        {/* Accordion for Mobile View */}
        <Accordion defaultActiveKey="0" className="d-block d-lg-none">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Company</Accordion.Header>
            <Accordion.Body>
              {companyLinks.map((link, index) => (
                <Link key={index} to={link.path} className="d-block mb-2">
                  {link.text}
                </Link>
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Our Services</Accordion.Header>
            <Accordion.Body>
              {serviceLinks.map((link, index) => (
                <Link key={index} to={link.path} className="d-block mb-2">
                  {link.text}
                </Link>
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Featured Categories</Accordion.Header>
            <Accordion.Body>
              {categoryLinks.map((link, index) => (
                <Link key={index} to={link.path} className="d-block mb-2">
                  {link.text}
                </Link>
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Need Help</Accordion.Header>
            <Accordion.Body>
              {helpLinks.map((link, index) => (
                <Link key={index} to={link.path} className="d-block mb-2">
                  {link.text}
                </Link>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Footer for Desktop View */}
        <Row className="d-none d-lg-flex">
          <Col lg={3}>
            <h5>Company</h5>
            {companyLinks.map((link, index) => (
              <Link key={index} to={link.path} className="d-block mb-2">
                {link.text}
              </Link>
            ))}
            <h5 className="mt-5">Our Services</h5>
            {serviceLinks.map((link, index) => (
              <Link key={index} to={link.path} className="d-block mb-2">
                {link.text}
              </Link>
            ))}
          </Col>
          <Col lg={3}>
            <h5>Featured Categories</h5>
            {categoryLinks.map((link, index) => (
              <Link key={index} to={link.path} className="d-block mb-2">
                {link.text}
              </Link>
            ))}
          </Col>
          <Col lg={3}>
            <h5>Need Help</h5>
            {helpLinks.map((link, index) => (
              <Link key={index} to={link.path} className="d-block mb-2">
                {link.text}
              </Link>
            ))}
          </Col>
          <Col lg={3}>
            <h5>Follow us on</h5>
            <Row>
              <Col xs={3}>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=32x0"
                  alt="Facebook"
                  rounded
                />
              </Col>
              <Col xs={3}>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=32x0"
                  alt="YouTube"
                  rounded
                />
              </Col>
              <Col xs={3}>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=32x0"
                  alt="Twitter"
                  rounded
                />
              </Col>
              <Col xs={3}>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=32x0"
                  rounded
                />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Payment Partners */}
        <h5 className="mt-5">Our Payment Partners</h5>
        <Row className="justify-content-center">
          {paymentIcons.map((icon, index) => (
            <Col
              key={index}
              xs={6}
              md={1}
              className="d-flex justify-content-center mb-3"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                fluid
                style={{ maxHeight: "20px", objectFit: "contain" }}
              />
            </Col>
          ))}
        </Row>

        {/* Footer Copy */}
        <Row>
          <Col className="text-center py-3">
            <p>PharmCare &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Footer

import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Accordion, Card, Image } from "react-bootstrap"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <Container fluid className="bg-light py-5">
        <Container className="footer-content">
          <Accordion defaultActiveKey="0" className="d-block d-lg-none">
            <Card>
              <Accordion.Button variant="link" eventKey="0">
                <h5>Company</h5>
              </Accordion.Button>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Link to="/about" className="d-block mb-2 no-underline">
                    About Us
                  </Link>

                  <Link to="/careers" className="d-block mb-2">
                    Careers
                  </Link>
                  <Link to="/blog" className="d-block mb-2">
                    Blog
                  </Link>
                  <Link to="/partner" className="d-block mb-2">
                    Partner with PharmEasy
                  </Link>
                  <Link to="/sell" className="d-block mb-2">
                    Sell at PharmEasy
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Button variant="link" eventKey="1">
                <h5>Our Services</h5>
              </Accordion.Button>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Link to="/" className="d-block mb-2">
                    Order Medicine
                  </Link>
                  <Link to="/healthcare" className="d-block mb-2">
                    Healthcare Products
                  </Link>
                  <Link to="/lab-tests" className="d-block mb-2">
                    Lab Tests
                  </Link>
                  <Link to="/collection-centre" className="d-block mb-2">
                    Find Nearest Collection Centre
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Button variant="link" eventKey="2">
                <h5>Featured Categories</h5>
              </Accordion.Button>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Link to="/covid-essentials" className="d-block mb-2">
                    Covid Essentials
                  </Link>
                  <Link to="/personal-care" className="d-block mb-2">
                    Personal Care
                  </Link>
                  <Link to="/health-food-drinks" className="d-block mb-2">
                    Health Food and Drinks
                  </Link>
                  <Link to="/makeup" className="d-block mb-2">
                    Beauty
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Button variant="link" eventKey="3">
                <h5>Need Help</h5>
              </Accordion.Button>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Link to="/browse-medicines" className="d-block mb-2">
                    Browse All Medicines
                  </Link>
                  <Link to="/browse-molecules" className="d-block mb-2">
                    Browse All Molecules
                  </Link>
                  <Link to="/browse-cities" className="d-block mb-2">
                    Browse All Cities
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Row className="d-none d-lg-flex">
            <Col lg={3}>
              <h5>Company</h5>
              <Link to="/about" className="d-block mb-2">
                About Us
              </Link>
              <Link to="/careers" className="d-block mb-2">
                Careers
              </Link>
              <Link to="/blog" className="d-block mb-2">
                Blog
              </Link>
              <Link to="/partner" className="d-block mb-2">
                Partner with PharmEasy
              </Link>
              <Link to="/sell" className="d-block mb-2">
                Sell at PharmEasy
              </Link>

              <h5 className="mt-5">Our Services</h5>
              <Link to="/order-medicine" className="d-block mb-2">
                Order Medicine
              </Link>
              <Link to="/healthcare-products" className="d-block mb-2">
                Healthcare Products
              </Link>
              <Link to="/lab-tests" className="d-block mb-2">
                Lab Tests
              </Link>
              <Link to="/collection-centre" className="d-block mb-2">
                Find Nearest Collection Centre
              </Link>
            </Col>

            <Col lg={3}>
              <h5>Featured Categories</h5>

              <Link to="/category/personal-care" className="d-block mb-2">
                Personal Care
              </Link>
              <Link to="/health-food-drinks" className="d-block mb-2">
                Health Food and Drinks
              </Link>
              <Link to="/category/makeup" className="d-block mb-2">
                Beauty
              </Link>
              <Link to="/category/personal-care" className="d-block mb-2">
                Skin Care
              </Link>
              <Link to="/category/home" className="d-block mb-2">
                Home Care
              </Link>
              <Link to="/category/ayurvedic" className="d-block mb-2">
                Ayurveda
              </Link>
              <Link to="/category/sexual-wellness" className="d-block mb-2">
                Sexual Wellness
              </Link>
              <Link to="/beauty" className="d-block mb-2">
                Fitness
              </Link>
              <Link to="/category/mother" className="d-block mb-2">
                Mother & Baby Care
              </Link>
              <Link to="/beauty" className="d-block mb-2">
                Top Products
              </Link>
            </Col>

            <Col lg={3}>
              <h5>Need Help</h5>
              <Link to="/browse-medicines" className="d-block mb-2">
                Browse All Medicines
              </Link>
              <Link to="/browse-molecules" className="d-block mb-2">
                Browse All Stores
              </Link>
              <Link to="/browse-cities" className="d-block mb-2">
                Browse All Cities
              </Link>
              <h5 className="mt-5">Policy Info</h5>
              <Link to="/editorial-policy" className="d-block mb-2">
                Return Policy
              </Link>
              <Link to="/privacy-policy" className="d-block mb-2">
                Privacy Policy
              </Link>
              <Link to="/terms" className="d-block mb-2">
                Terms and Conditions
              </Link>
            </Col>

            <Col lg={2}>
              <h5>Follow us on</h5>
              <Row>
                <Col xs={3}>
                  <Image
                    src="https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=32x0"
                    rounded
                  />
                </Col>
                <Col xs={3}>
                  <Image
                    src="https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=32x0"
                    rounded
                  />
                </Col>
                <Col xs={3}>
                  <Image
                    src="https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=32x0"
                    rounded
                  />
                </Col>
                <Col xs={3}>
                  <Image
                    src="https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=32x0"
                    rounded
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          {/* Our Payment Partners */}
          <h5 className="mt-5">Our Payment Partners</h5>
          <Row className="justify-content-center">
            <Col xs={6} md={1} className="d-flex justify-content-center mb-3">
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0"
                alt="Google Pay"
                fluid
                style={{ maxHeight: "20px", objectFit: "contain" }}
              />
            </Col>
            <Col xs={6} md={1} className="d-flex justify-content-center mb-3">
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0"
                alt="Paytm"
                fluid
                style={{ maxHeight: "20px", objectFit: "contain" }}
              />
            </Col>
            <Col xs={6} md={1} className="d-flex justify-content-center mb-3">
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0"
                alt="PhonePe"
                fluid
                style={{ maxHeight: "20px", objectFit: "contain" }}
              />
            </Col>
            <Col xs={6} md={1} className="d-flex justify-content-center mb-3">
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0"
                alt="Amazon Pay"
                fluid
                style={{ maxHeight: "20px", objectFit: "contain" }}
              />
            </Col>
            <Col xs={6} md={1} className="d-flex justify-content-center mb-3">
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0"
                alt="Mastercard"
                fluid
                style={{ maxHeight: "20px", objectFit: "contain" }}
              />
            </Col>
            <Col xs={6} md={1} className="d-flex justify-content-center mb-3">
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0"
                alt="Rupay"
                fluid
                style={{ maxHeight: "20px", objectFit: "contain" }}
              />
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-3">
              <p>PharmCare &copy; {currentYear}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Footer

import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  //get current year using javascript date object
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>PharmCare &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer

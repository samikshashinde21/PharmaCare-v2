import { Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Paginate from "../components/Paginate"
import Product from "../components/Product"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { useGetProductsQuery } from "../slices/productsApiSlice"
import { Link } from "react-router-dom"
import ProductCarousel from "../components/ProductCarousel"
import {
  HouseDoor,
  Heart,
  Shield,
  Palette,
  Person,
  Cart,
  Egg,
  ShieldLock,
  Capsule,
  Memory,
} from "react-bootstrap-icons"

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams()

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  })

  return (
    // handling isLoading and error
    <>
      <div className="page-content">
        {!keyword ? (
          <ProductCarousel />
        ) : (
          <Link to="/" className="btn btn-light mb-4">
            Go Back
          </Link>
        )}
        <h2>Browse by Categories</h2>
        <div className="category-container">
          <Link to="/category/healthcare">
            <button className="category-btn">
              <Capsule size={20} className="me-2" />
              Healthcare
            </button>
          </Link>

          <Link to="/category/personal-care">
            <button className="category-btn">
              <ShieldLock size={20} className="me-2" />
              Personal Care
            </button>
          </Link>

          <Link to="/category/mother-care">
            <button className="category-btn">
              <Person size={20} className="me-2" />
              Mother & Baby Care
            </button>
          </Link>

          <Link to="/category/makeup">
            <button className="category-btn">
              <Palette size={20} className="me-2" />
              Makeup
            </button>
          </Link>

          <Link to="/category/devices">
            <button className="category-btn">
              <Memory size={20} className="me-2" />
              Healthcare Devices
            </button>
          </Link>

          <Link to="/category/ayurvedic">
            <button className="category-btn">
              <Shield size={20} className="me-2" />
              Ayurvedic
            </button>
          </Link>

          <Link to="/category/home">
            <button className="category-btn">
              <Cart size={20} className="me-2" />
              Home Essentials
            </button>
          </Link>

          <Link to="/category/sexual-wellness">
            <button className="category-btn">
              <Heart size={20} className="me-2" />
              Sexual Wellness
            </button>
          </Link>
        </div>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <>
            <h1>Latest Products</h1>
            <Row>
              {
                // react-bootstrap col is responsive
                data.products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))
              }
            </Row>
            <Paginate
              pages={data.pages}
              page={data.page}
              keyword={keyword ? keyword : ""}
            />
          </>
        )}
      </div>
    </>
  )
}
export default HomeScreen

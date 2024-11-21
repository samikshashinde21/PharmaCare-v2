import { Card, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"
import { useDispatch } from "react-redux"
import { addToCart } from "../slices/cartSlice"

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: 1 }))
  }

  return (
    <Card className="my-3 p-3 rounded product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="product-img" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/*     <div className=" product-rating">
          <Card.Text as="div" className="mb-0">
            <Rating value={product.rating} />
          </Card.Text>
          <Card.Text as="div" className="review-text">
            {product.numReviews} reviews
          </Card.Text>
        </div> */}
        <div className="product-rating">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mt-2">
          <Card.Text as="h3" className="card-price mb-0">
            ₹{product.price}
          </Card.Text>
          <Button
            variant="primary"
            onClick={handleAddToCart}
            size="sm"
            style={{
              width: "80px",
              height: "35px",
              padding: "0 10px",
            }}
            className="add-button"
          >
            ADD
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product

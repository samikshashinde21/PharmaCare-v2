/* import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title
            as="div"
            //when there is shorter title, the tile would get smaller. In order to display equal size of all tiles, add className='product-title'
            className="product-title"
          >
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">Rs. {product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
 */ import { Card, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"
import { useDispatch } from "react-redux"
import { addToCart } from "../slices/cartSlice"

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: 1 })) // Set default qty to 1
  }

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* Product rating and reviews in separate lines */}
        <div className="mb-2">
          <Card.Text as="div" className="mb-0">
            <Rating value={product.rating} />
          </Card.Text>
          <Card.Text as="div" className="mb-0">
            {product.numReviews} reviews
          </Card.Text>
        </div>

        {/* Product price aligned to the left and ADD button to the right */}
        <div className="d-flex justify-content-between align-items-center mt-2">
          <Card.Text as="h3" className="mb-0">
            Rs. {product.price}
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
          >
            ADD
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product

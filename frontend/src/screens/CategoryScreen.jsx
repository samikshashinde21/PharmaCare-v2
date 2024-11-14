import {
  Row,
  Col,
  Container,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap"
import Product from "../components/Product"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { useGetProductsQuery } from "../slices/productsApiSlice"
import Paginate from "../components/Paginate"

const CategoryScreen = () => {
  const { category } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  // Get query parameters for sorting, brand filtering, and pagination
  const queryParams = new URLSearchParams(location.search)
  const sortBy = queryParams.get("sort") || "price"
  const brandFilter = queryParams.get("brand") || ""

  // Fetch products based on parameters
  const { data, isLoading, error } = useGetProductsQuery({
    category,
    sortBy,
    brandFilter,
    pageNumber: queryParams.get("page") || 1,
  })

  // Function to update sort option in URL
  const handleSortChange = (sortValue) => {
    queryParams.set("sort", sortValue)
    navigate(`/category/${category}?${queryParams.toString()}`)
  }

  // Function to update brand filter in URL
  const handleBrandFilter = (filterValue) => {
    queryParams.set("brand", filterValue)
    navigate(`/category/${category}?${queryParams.toString()}`)
  }

  const handleCategoryFilter = (selectedCategories) => {
    const categoryParam = selectedCategories.join(",") // Join categories by comma
    queryParams.set("category", categoryParam)
    navigate(`/category/${category}?${queryParams.toString()}`)
  }

  // Handle "Go Back" button click
  const handleGoBack = () => {
    navigate("/") // This will take the user back to the previous page
  }

  return (
    <Container>
      <h1 className="category-heading">
        {category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
        Products
      </h1>

      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex gap-3">
          <DropdownButton
            id="dropdown-sort"
            title={`Sort by ${
              sortBy.charAt(0).toUpperCase() + sortBy.slice(1)
            }`}
            onSelect={handleSortChange}
          >
            <Dropdown.Item eventKey="price">Price</Dropdown.Item>
            <Dropdown.Item eventKey="rating">Rating</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            id="dropdown-brand"
            title={`Brand: ${brandFilter || "All"}`}
            onSelect={handleBrandFilter}
          >
            <Dropdown.Item eventKey="">All</Dropdown.Item>
            <Dropdown.Item eventKey="Dettol">Dettol</Dropdown.Item>
            <Dropdown.Item eventKey="Dabur">Dabur</Dropdown.Item>
            <Dropdown.Item eventKey="EverHerb">EverHerb</Dropdown.Item>
            <Dropdown.Item eventKey="LivEasy">LivEasy</Dropdown.Item>
            <Dropdown.Item eventKey="Vicks">Vicks</Dropdown.Item>
            <Dropdown.Item eventKey="Revital">Revital</Dropdown.Item>
            <Dropdown.Item eventKey="Savlon">Savlon</Dropdown.Item>
            <Dropdown.Item eventKey="Baidyanath">Baidyanath</Dropdown.Item>
            <Dropdown.Item eventKey="Sbl">Sbl</Dropdown.Item>
            <Dropdown.Item eventKey="PharmEasy">PharmEasy</Dropdown.Item>
            <Dropdown.Item eventKey="Amrutanjan">Amrutanjan</Dropdown.Item>
            <Dropdown.Item eventKey="BPL">BPL</Dropdown.Item>
            <Dropdown.Item eventKey="Becozym">Becozym</Dropdown.Item>
          </DropdownButton>
        </div>

        <Button variant="outline-secondary" onClick={handleGoBack}>
          Go Back
        </Button>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Row>
            {data.products
              .filter((product) => product.category.includes(category))
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>

          <Paginate pages={data.pages} page={data.page} category={category} />
        </>
      )}
    </Container>
  )
}

export default CategoryScreen

import { Carousel, Image } from "react-bootstrap"

const ProductCarousel = () => {
  const offerImages = [
    {
      id: 1,
      imageUrl: "/images/banner1.webp",
      caption: "Exciting Offers Await!",
    },
    {
      id: 2,
      imageUrl: "/images/banner2.webp",
      caption: "Don't Miss Out on the Big Sale!",
    },
    {
      id: 3,
      imageUrl: "/images/banner3.webp",
      caption: "Discover Deals on Top Brands!",
    },
  ]

  return (
    <Carousel pause="hover" className="bg-primary mb-4">
      {offerImages.map((offer) => (
        <Carousel.Item key={offer.id}>
          <Image
            src={offer.imageUrl}
            alt={offer.caption}
            className="carousel-img"
            fluid
          />
          <Carousel.Caption className="carousel-caption">
            <h2>{offer.caption}</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel

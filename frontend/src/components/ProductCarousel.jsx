import { Carousel, Image } from "react-bootstrap"

const ProductCarousel = () => {
  // Offer images URLs you provided
  const offerImages = [
    /* {
      id: 1,
      imageUrl:
        "https://cdn01.pharmeasy.in/dam/banner/banner/833b0458766-HP.jpg",
      caption: "Special Offer 1",
    }, */
    { id: 1, imageUrl: "/images/Banner.webp", caption: "Special Offer!" },
    /* {
      id: 2,
      imageUrl:
        "https://cdn01.pharmeasy.in/dam/banner/banner/093f30fa096-revisedgrand1000.jpg",
      caption: "Big Sale Coming Soon!",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn01.pharmeasy.in/dam/banner/banner/067980fe26a-Centrum_634X274-min.jpg",
      caption: "Buy One Get One Free!",
    }, */
    {
      id: 2,
      imageUrl: "/images/Banner.webp",
      caption: "Big Sale Coming Soon!",
    },
    {
      id: 3,
      imageUrl: "/images/Banner.webp",
      caption: "Buy One Get One Free!",
    },
  ]

  return (
    <Carousel pause="hover" className="bg-primary mb-4">
      {/* Loop through the offer images only */}
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

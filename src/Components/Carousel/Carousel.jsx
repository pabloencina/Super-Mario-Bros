import CarouselComponents from "react-bootstrap/Carousel";
import ImageCarousel1 from "../../Images/Images-carousel/image-carousel1.png";
import ImageCarousel2 from "../../Images/Images-carousel/image-carousel2.png";
//import ImageCarousel3 from "../../Images/Images-carousel/image-carousel3.png";

const CarouselComponent = () => {
  return (
    <CarouselComponents className="carousel__container">
      <CarouselComponents.Item className="carousel__container_image">
        <img
          className="carousel__image"
          src={ImageCarousel1}
          alt="First slide"
        />
        <CarouselComponents.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </CarouselComponents.Caption>
      </CarouselComponents.Item>
      <CarouselComponents.Item className="carousel__container_image">
        <img
          className="carousel__image"
          src={ImageCarousel2}
          alt="Second slide"
        />

        <CarouselComponents.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </CarouselComponents.Caption>
      </CarouselComponents.Item>
      <CarouselComponents.Item className="carousel__container_image">
        <img
          className="carousel__image"
          src={ImageCarousel1}
          alt="Third slide"
        />

        <CarouselComponents.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </CarouselComponents.Caption>
      </CarouselComponents.Item>
    </CarouselComponents>
  );
};

export default CarouselComponent;

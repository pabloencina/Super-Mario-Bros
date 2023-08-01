import CarouselComponents from "react-bootstrap/Carousel";
import ImageCarousel1 from "../../Images/Images-carousel/image-carousel1.png";
import ImageCarousel2 from "../../Images/Images-carousel/image-carousel2.png";
import ImageCarousel3 from "../../Images/Images-carousel/image-carousel3.jpeg";
import ImageCarousel4 from "../../Images/Images-carousel/image-carousel4.jpeg";
import ImageCarousel5 from "../../Images/Images-carousel/image-carousel5.jpeg";

const CarouselComponent = () => {
  return (
    <CarouselComponents className="carousel__container">
      <CarouselComponents.Item className="carousel__container_image">
        <img
          className="carousel__image"
          src={ImageCarousel1}
          alt="First slide"
        />
      </CarouselComponents.Item>
      <CarouselComponents.Item className="carousel__container_image">
        <img
          className="carousel__image"
          src={ImageCarousel2}
          alt="Second slide"
        />
      </CarouselComponents.Item>
      <CarouselComponents.Item className="carousel__container_image">
        <img
          className="carousel__image"
          src={ImageCarousel3}
          alt="Third slide"
        />
      </CarouselComponents.Item>
      <CarouselComponents.Item className="carousel__container_image">
        <img
          className="carousel__image"
          src={ImageCarousel4}
          alt="Third slide"
        />
      </CarouselComponents.Item>
      <CarouselComponents.Item className="carousel__container_image">
        <img
          className="carousel__image"
          src={ImageCarousel5}
          alt="Third slide"
        />
      </CarouselComponents.Item>
    </CarouselComponents>
  );
};

export default CarouselComponent;

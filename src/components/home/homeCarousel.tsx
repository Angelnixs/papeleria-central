import Carousel from 'react-bootstrap/Carousel';

export default function HomeCarousel() {
  return (
    <Carousel variant="dark" fade interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/lb-banner.jfif"
          alt="First slide"
          style={{ maxHeight: '450px' }}
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/lb-banner-2.jpg"
          alt="Second slide"
          style={{ maxHeight: '450px' }}
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/lb-info.jpg"
          alt="Third slide"
          style={{ maxHeight: '450px' }}
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

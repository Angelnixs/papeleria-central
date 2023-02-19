import  {
  Container,
  Row,
  Col,
  Button,
  Image,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../assets/styles/footer.css'

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col md={6} lg={3}>
              <h2>Papelería Central</h2>
              <ul>
                <li className="contact">
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:(010) 1234 4321">(010) 1234 4321</a>
                </li>
                <li className="contact"><FontAwesomeIcon icon={faMapMarker} />
                  1 / 105 Bay Lights,
                  <br/>Lorem Ipsum,
                  <br/>LIC 3201
                </li>
              </ul>
              <Button variant="danger">Contactanos</Button>
            </Col>
            <Col md={6} lg={2}>
              <div>
                <h4>Page links</h4>
              </div>
              <hr className="red" />
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </Col>
            <Col md={6} lg={3}>
              <div className="footer-title">
                <h4>More Info</h4>
              </div>
              <hr className="red" />
              <ul>
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">Dolor sit amet</a></li>
                <li><a href="#">Consectetur Adipisicing </a></li>
                <li><a href="#">Ed do eiusmod tempor incididunt</a></li>
              </ul>
            </Col>
            <Col md={6} lg={4}>
              <div className="open-hours">
                <h4>Open hours</h4>
                <ul className="social-media">
                  <li><a href="" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                </ul>
              </div>
              <hr className="red" />
              <table>
                <tbody>
                  <tr>
                    <td><FontAwesomeIcon icon={faClock} /></td>
                    <td>Lunes a Viernes</td>
                    <td>9:00am - 5:00pm</td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faClock} /></td>
                    <td>Sabado</td>
                    <td>9:00am - 4:00pm</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td><Image src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" fluid/></td>
                      <td><Image src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" fluid/></td>
                      <td><Image src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" fluid/></td>
                      <td><Image src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" fluid/></td>
                      <td><Image src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" fluid/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={4}>
              <a href="">Privacy policy</a>
            </Col>
            <Col sm={8}>
              <p className="reserved">Lorem ipsum dolor sit amet @ 2019 All rights reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
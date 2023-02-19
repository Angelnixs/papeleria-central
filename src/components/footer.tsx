import  {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col md={6} lg={3}>
              <h3>Lorem Ipsum dummy text </h3>
              <ul>
                <li><a href="tel:(010) 1234 4321"><FontAwesomeIcon icon={faPhone} />(010) 1234 4321</a></li>
                <li><i className="fas fa-map-marker-alt"></i>
                  1 / 105 Bay Lights,
                  <br/>Lorem Ipsum,
                  <br/>LIC 3201
                </li>
              </ul>
              <Button variant="primary">Contactanos</Button>
            </Col>
            <Col md={6} lg={2}>
              <div>
                <h4>Page links</h4>
              </div>
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
              <ul>
                  <li><a href="#">Lorem ipsum</a></li>
                  <li><a href="#">Dolor sit amet</a></li>
                  <li><a href="#">Consectetur Adipisicing </a></li>
                  <li><a href="#">Ed do eiusmod tempor incididunt</a></li>
              </ul>
            </Col>
            <Col md={6} lg={4}>
              <div>
                <h4>Open hours</h4>
                <ul>
                  <li><a href="" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="" target="_blank"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>

                </ul>
              </div>
              <table>
                  <tbody>
                      <tr>
                          <td><i className="far fa-clock"></i>Monday Thursday</td>
                          <td>9:00am - 5:00pm</td>
                      </tr>
                      <tr>
                          <td><i className="far fa-clock"></i>Friday</td>
                          <td>9:00am - 4:00pm</td>
                      </tr>
                      <tr>
                          <td><i className="far fa-clock"></i>Sturday</td>
                          <td>9:00am - 1:30pm</td>
                      </tr>
                      <tr>
                          <td><i className="far fa-clock"></i>Sunday</td>
                          <td>9:30am - 12:00pm</td>
                      </tr>
                  </tbody>
              </table>
              <hr />
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" /></td>
                      <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" /></td>
                      <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" /></td>
                      <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg" /></td>
                      <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"/></td>
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
              <p>Lorem ipsum dolor sit amet @ 2019 All rights reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
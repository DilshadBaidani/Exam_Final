import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import aboutImg from '../assets/images/about.png'
import pic1 from '../assets/images/1..png'
import pic2 from '../assets/images/2..png'
import pic3 from '../assets/images/3..png'

const About = () => {
  return (
    <Container>
      <Row className='my-5'>
        <Col md={6}>
          <Image height={400} width={500} src={aboutImg} alt='About Us' fluid />
        </Col>
        <Col md={6}>
          <br />
          <br />
          <h2>About Our Products</h2>
          <p>
            Good products possess a combination of key attributes that cater to
            the diverse needs and preferences of consumers. Quality is
            paramount, with well-made and durable products exceeding user
            expectations in both performance and longevity.
          </p>
          <p>
            Reliability instills confidence, ensuring consistent performance
            over time and a low risk of malfunction. Innovation sets products
            apart, incorporating advanced features or improvements.
          </p>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to
            you. If you have any questions or comments, please don't hesitate to
            contact us.
          </p>
        </Col>
      </Row>

      <Row className='my-5'>
        {/* <Col md={4}>
          <Card
            style={{
              background: '#333',
              color: 'white',
              textAlign: 'center',
              width: '28rem',
              height: '15rem',
              textJustify: 'middle',
              padding: '20px',
              margin: '20px',
            }}
          >
            <Card.Body>
              <Card.Title>peace of mind</Card.Title>
              <Card.Text>
                A one-stop platform for all your fashion needs, hassle-free. Buy
                with a peace of mind.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card
            style={{
              background: '#333',
              color: 'white',
              textAlign: 'center',
              width: '28rem',
              height: '15rem',
              textJustify: 'middle',
              padding: '20px',
              margin: '20px',
            }}
          >
            <Card.Body>
              <Card.Title>peace of mind</Card.Title>
              <Card.Text>
                A one-stop platform for all your fashion needs, hassle-free. Buy
                with a peace of mind.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> */}

        <h2>Out Top Sellers</h2>

        <Col md={4}>
          <Card>
            <Card.Img width={200} height={250} variant='top' src={pic1} />
            <Card.Body>
              <Card.Title>Gray Polo Shirt</Card.Title>
              <Card.Text>$49.00</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img width={200} height={250} variant='top' src={pic2} />
            <Card.Body>
              <Card.Title>Polo White Shirt</Card.Title>
              <Card.Text>$49.00</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img width={200} height={250} variant='top' src={pic3} />
            <Card.Body>
              <Card.Title>Red Shirt </Card.Title>
              <Card.Text>Full stake enterprise application developer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Other sections like customer testimonials, achievements, etc. can be added here */}
    </Container>
  )
}

export default About

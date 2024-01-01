// import BannerZero from '../assets/images/banner-0.png'
// import BannerOne from '../assets/images/banner-1.jpg'
// import BannerTwo from '../assets/images/banner-2.jpg'

// function BannerIncidator(props) {
//   return (
//     <button
//       type='button'
//       data-bs-target='#bannerIndicators'
//       data-bs-slide-to={props.index}
//       className={props.active ? 'active' : ''}
//       aria-current={props.active}
//     />
//   )
// }

// function BannerImage(props) {
//   return (
//     <div
//       className={'carousel-item ' + (props.active ? 'active' : '')}
//       data-bs-interval='5000'
//     >
//       <div
//         className='ratio'
//         style={{ '--bs-aspect-ratio': '50%', maxHeight: '460px' }}
//       >
//         <img
//           className='d-block w-100 h-100 bg-dark cover'
//           alt=''
//           src={props.image}
//         />
//       </div>
//       <div className='carousel-caption d-none d-lg-block'>
//         <h5>Banner Header</h5>
//         <p>Some representative placeholder content for the banner.</p>
//       </div>
//     </div>
//   )
// }

// function Banner() {
//   return (
//     <div
//       id='bannerIndicators'
//       className='carousel slide'
//       data-bs-ride='carousel'
//       style={{ marginTop: '56px' }}
//     >
//       <div className='carousel-indicators'>
//         <BannerIncidator index='0' active={true} />
//         <BannerIncidator index='1' />
//         <BannerIncidator index='2' />
//       </div>
//       <div className='carousel-inner'>
//         <BannerImage image={BannerZero} active={true} />
//         <BannerImage image={BannerOne} />
//         <BannerImage image={BannerTwo} />
//       </div>
//     </div>
//   )
// }

// export default Banner

// src/components/HomePage.js

// import React from 'react'
// import './Homepage.css' // Import your CSS file for styling if needed

// const HomePage = () => {
//   return (
//     <div className='home-container'>
//       <div className='left-section'>
//         <h1>Welcome to Our Website</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>
//       <div className='right-section'>
//         <img
//           src='..\assets\images\banner-0.png' // Replace with the actual image URL
//           alt='Homepage'
//         />
//       </div>
//     </div>
//   )
// }

// export default HomePage

// src/components/HomePage.js

// Your React component
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ecommerce from '../assets/images/ecommerce.jpg' // Import your image path
// import product page
import Product from './Product'
import './home.css' // Import your custom styles

const Homepage = () => {
  return (
    <Container className='my-container'>
      <Row className='my-5'>
        <Col md={6}>
          <br />
          <h2 className='my-heading'>Welcome to Our Store</h2>
          <br />

          <p className='my-paragraph'>
            Welcome to FakeStore Full Product, your number one source for all
            things, e.g., books, shoes, electronics, cloths, and jewellery.
            We're dedicated to providing you the very best of products, with an
            emphasis on quality, quantity, and low price.
          </p>
          <p className='my-paragraph'>
            We hope you enjoy our products as much as we enjoy offering them to
            you. If you have any questions or comments, please don't hesitate to
            contact us.
          </p>
        </Col>
        <Col md={6}>
          <Image src={ecommerce} alt='pic' fluid className='my-image' />
        </Col>
      </Row>
    </Container>
  )
}

;<div className='container'>
  <div className='row'>
    <div className='col-sm-3'>
      <h3>Free Shipping</h3>
      <p>Enjoy free shipping on all orders above $100</p>
    </div>

    <div className='col-sm-3'>
      <h3>SUPPORT 24/7</h3>
      <p>Our support team is there to help you for queries</p>
    </div>

    <div className='col-sm-3'>
      <h3>30 DAYS RETURN</h3>
      <p>Simply return it within 30 days for an exchange.</p>
    </div>

    <div className='col-sm-3'>
      <h3>100% PAYMENT SECURE</h3>
      <p>Our payments are secured with 256 bit encryption</p>
    </div>
  </div>
</div>

export default Homepage

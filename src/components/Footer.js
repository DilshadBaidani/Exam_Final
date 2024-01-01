// import React from 'react'
// import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap'
// import './footer.css'
// import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons' // Import social media icons

// const Footer = () => {
//   return (
//     <footer className='bg-dark text-white mt-4'>
//       <Container className='py-4'>
//         <Row>
//           <Col sm={12} md={6} lg={3}>
//             <h5>Navigation</h5>
//             <Nav className='flex-column'>
//               <Nav.Link href='/' className='text-white'>
//                 Home
//               </Nav.Link>
//               <Nav.Link href='/product' className='text-white'>
//                 Product
//               </Nav.Link>
//               <Nav.Link href='/about' className='text-white'>
//                 About
//               </Nav.Link>
//               <Nav.Link href='/contact' className='text-white'>
//                 Contact Us
//               </Nav.Link>
//             </Nav>
//           </Col>
//           <Col sm={12} md={6} lg={3}>
//             <h5>Social Media</h5>
//             <ListGroup horizontal>
//               <ListGroup.Item className='bg-dark border-0'>
//                 <Facebook className='text-white' size={24} />
//               </ListGroup.Item>
//               <ListGroup.Item className='bg-dark border-0'>
//                 <Twitter className='text-white' size={24} />
//               </ListGroup.Item>
//               <ListGroup.Item className='bg-dark border-0'>
//                 <Instagram className='text-white' size={24} />
//               </ListGroup.Item>
//             </ListGroup>
//           </Col>
//         </Row>
//         <Row className='mt-4'>
//           <Col className='text-center'>
//             &copy; {new Date().getFullYear()} fake-store
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }

// export default Footer

import React from 'react'
import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap'
import './footer.css' // Assuming custom CSS for styling
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Whatsapp,
} from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer className='bg-dark text-white py-2'>
      <Container className='px-5'>
        <Row className='align-items-center'>
          <Col sm={4} md={6} lg={3} className='mb-4 mb-md-0'>
            {/* <h5 className='text-uppercase mb-3'>Links</h5> */}
            <Nav className='nav flex-column'>
              <Nav.Link href='/' className='text-white'>
                Home
              </Nav.Link>
              <Nav.Link href='/product' className='text-white'>
                Product
              </Nav.Link>
              <Nav.Link href='/about' className='text-white'>
                About
              </Nav.Link>
              <Nav.Link href='/contact' className='text-white'>
                Contact Us
              </Nav.Link>
            </Nav>
          </Col>
          <Col sm={4} md={6} lg={3} className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-3'>Social Media</h5>
            <ListGroup className='list-group-horizontal'>
              <ListGroup.Item className='list-group-item-action bg-dark'>
                <Facebook className='text-white' size={24} />
              </ListGroup.Item>
              <ListGroup.Item className='list-group-item-action bg-dark'>
                <Twitter className='text-white' size={24} />
              </ListGroup.Item>
              <ListGroup.Item className='list-group-item-action bg-dark'>
                <Instagram className='text-white' size={24} />
              </ListGroup.Item>
              <ListGroup.Item className='list-group-item-action bg-dark'>
                <Github className='text-white' size={24} />
              </ListGroup.Item>
              <ListGroup.Item className='list-group-item-action bg-dark'>
                <Whatsapp className='text-white' size={24} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={4} md={12} lg={6} className='text-center'>
            <p className='small mb-0 text-white'>
              &copy; {new Date().getFullYear()} fake-store
            </p>
            <p className='small mb-0 text-white'>
              This store designed by Dilshad Hussain
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

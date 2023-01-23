
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './UpMenu.css'

export default function UpMenu() {
  return (
    <Container className='Up-Menu'>
        <Row>
        <Col>
        <div className='addres-box' >
           <ul class="col list-inline mb-0 contact-box ">
               <li class="list-inline-item entext d-block d-lg-inline-block">
                   <i class="fas fa-phone"></i>
                   021-88888888
               </li>
               <li class="list-inline-item entext d-block d-lg-inline-block">
                   <i class="far fa-envelope"></i>
                   websila.ir@gmail.com
               </li>
               <li class="list-inline-item d-none d-lg-inline-block">
                   <i class="far fa-envelope"></i>
                   تهران
               </li>
           </ul>
         </div>
        </Col>
        <Col>
       <div class="col mt-3 mt-lg-0 text-center">
        <div class="social-box d-inline-block me-sm-3 pe-sm-3">
          <span>دنبال کنید :</span>
          <ul class="list-inline d-inline-block mb-0">
            <li class="list-inline-item">
              <i class="fab fa-facebook-f"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-twitter"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-instagram"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-pinterest-p"></i>
            </li>
          </ul>
        </div>
        
             
  
     </div>
    </Col>
    <Col>
      <div
        class="search-box d-inline-block position-relative mt-2 mt-sm-0"
      >
        <i class="fas fa-search"></i>
        <input type="text" placeholder="جستجو..." />
      </div>
    </Col>
      </Row>
    </Container>
    
   
  )
}


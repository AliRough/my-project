
import React from 'react'
import Cantact from './Cantact'
import './UpMenu.css'

export default function UpMenu() {
  return ( 
    <div className="container-fluid upmenu py-2">
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between">
          <div className="col-auto text-center">
            <ul className="list-inline mb-0 contact-box">
              <Cantact IClass="fas fa-phone" >
              
                  021-88888888
              </Cantact>
              <Cantact IClass="far fa-envelope">
              
                websila.ir@gmail.com
              </Cantact>
              <Cantact IClass="far fa-envelope">
              
                تهران
              </Cantact>
             </ul>
          </div>
          <div className="w-100 d-lg-none"></div>
          <div className="col-auto mt-3 mt-lg-0 text-center">
            <div className="social-box d-inline-block me-sm-3 pe-sm-3">
              <span>دنبال کنید :</span>
              <ul className="list-inline d-inline-block mb-0">
                <li className="list-inline-item">
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-twitter"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-instagram"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-pinterest-p"></i>
                </li>
              </ul>
            </div>
            <div
              className="search-box d-inline-block position-relative mt-2 mt-sm-0"
            >
              <i className="fas fa-search"></i>
              <input type="text" placeholder="جستجو..." />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


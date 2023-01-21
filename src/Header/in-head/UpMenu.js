
import React from 'react'
import './UpMenu.css'

export default function UpMenu() {
  return (
    
      <div class="container-fluid up-menu">
      <div class="container">
          <div class="row justify-content-center justify-content-lg-between py-2">
              <div class="col-auto text-center">
                  <ul class=" list-inline mb-0 contact-box ">
                      <li class=" list-inline-item en-text d-block d-lg-inline-block">
                          <i class="fa-solid fa-phone"></i>
                          013-44444444

                      </li>
                      <li class="list-inline-item en-text d-block d-lg-inline-block">
                          <i class="fa-solid fa-envelope"></i>
                          This.Email.gmail.com
                      </li>
                  </ul>
              </div>
              <div class="w-100 d-lg-none"></div>
              <div class="col-auto mt-3 mt-lg-0 text-center">
                  <div class="social-box  d-inline-block me-sm-3 pe-sm-3">
                      <span>
                          دنبال کنید
                      </span>
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
                  <div class="search-box d-inline-block position-relative mt-2 mt-sm-0 ">
                      <i class="fas fa-search"></i>
                      <input type="text" placeholder="جستجو..."/>
                  </div>
              </div>
          </div>
      </div>
    </div>
   
  )
}

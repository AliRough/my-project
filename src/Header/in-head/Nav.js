import React from 'react'
import NavLi from './NavLi'
import NavUl from './NavUl'
import  './Nav.css'


export default function Nav() {
  return (
    <nav  className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container justiy-content-between">
          <a className="navbar-brand flex-grow-1 flex-lg-grow-0" href="#">
            <img src="assets/images/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler order-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="main_nav">
            <NavUl class="navbar-nav">
             <NavLi desc="صفحه اصلی"/>
             <NavLi desc="صفحات" class="nav-item dropdown" dataBsToggle="dropdown">
              <NavUl class="dropdown-menu">
                <NavLi desc="کاربران" class="nav-item dropdown-menu"/>
                  <li>
                    <a className="dropdown-item dropdown-toggle" href="#">
                      زیر منوی 1
                    </a>
                    <ul className="submenu dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">زیر منوی 1</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">زیر منوی 2</a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-toggle" href="#"
                          >زیر منوی 3
                        </a>
                        <ul className="submenu dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">خیلی زیر منو 1</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">خیلی زیر منو 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">زیر منوی 4</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">زیر منوی 5</a>
                      </li>
                    </ul>
                  </li>
                  <NavLi desc="زیر منو 2"/>
                  <NavLi desc="زیر منو 3"/>
                </NavUl>
             </NavLi>
              <NavLi desc="تماس باما " notif="0" />
              <NavLi desc="درباره ما"/>
            </NavUl>
          </div>
          <div
            className="btn ay-btn-outline-primary rounded-pill py-2 px-4 order-1 me-2 me-lg-0"
          >
            تماس بگیرید
          </div>
        </div>
      </nav>
  )
}


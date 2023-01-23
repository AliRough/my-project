import React from 'react'
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
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">صفحه اصلی </a>
              </li>

              <li className="nav-item dropdown" id="myDropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  صفحات
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"> کاربران </a></li>
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
                  <li><a className="dropdown-item" href="#">زیر منوی 3 </a></li>
                  <li><a className="dropdown-item" href="#"> زیر منوی 4 </a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> درباره ما </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> تماس با ما </a>
              </li>
            </ul>
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


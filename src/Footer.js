import React from 'react'
// import {Button} from "react-bootstrap"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
    <hr className="border-3" />
  
    {/* <!-- Section: Links  --> */}
    <section>
      <div className="container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div className="row mt-3">
          {/* <!-- Grid column --> */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold mb-4">Languages</h6>
            <p>
              <a href="#!" className="text-reset">English</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Arabic</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}
  
          {/* <!-- Grid column --> */}
          <div className="col-md-5 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold mb-4">Get In Touch</h6>
            <p>
              {/* <a href=""> */}
                <i className="fa-solid fa-phone fa-xl"></i>&nbsp;&nbsp;(06)
                516-0103
                {/* </a> */}
              {/* <!-- href="tel:+962" --> */}
            </p>
            <p>
              <i className="fa-solid fa-location-dot fa-xl"></i
              >&nbsp;&nbsp;Amman,Jordan
            </p>
            <p>
              <a href="mailto: harmony.house@gmail.com">
                <i className="fa-solid fa-envelope fa-xl"></i>
                harmony.house@gmail.com
              </a>
            </p>
          </div>
          
          {/* <!-- Grid column --> */}
  
          {/* <!-- Grid column --> */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold mb-4">Connect with us:</h6>
            {/* <a href="#">  */}
            <i className="fa-brands fa-facebook fa-xl"></i>
            {/* </a> */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {/* <a href="#">  */}
            <i className="fa-brands fa-instagram fa-xl"></i>
            {/* </a> */}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {/* <a href="#">  */}
            <i className="fa-brands fa-linkedin fa-xl"></i>
            {/* </a> */}
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
    </section>
    {/* <!-- Section: Links  --> */}
  
    {/* <!-- Copyright --> */}
    <div className="text-center p-4">Copyright &copy; HarmonyHouse 2023</div>
    {/* <!-- Copyright --> */}
  </footer>
  )
}

export default Footer
import React from 'react'
import "../ComponentsCss/FooterStyles.css"
const Footer = () => {
  return (
   <>
    <footer class="w-100 py-4 flex-shrink-0">
    <div class="container py-4">
      <div class="row gy-4 gx-4">
        <div class="col-lg-3 col-md-6">
          <h5 class="h1 text-white">Learned.</h5>
          <p className='f-para'>Edumodo focuses on creating magnificent education websites with ease. Take the lead
            in the race with Learned.</p>
          <hr />
          <div class="footer-icons">
            <i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;
            <i class="fa-brands fa-linkedin"></i>&nbsp;&nbsp;
            <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;
            <i class="fa-brands fa-skype"></i>&nbsp;&nbsp;
            <i class="fa-brands fa-pinterest"></i>&nbsp;&nbsp;
            <i class="fa-brands fa-apple"></i>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-white mb-3">FEATURED PROGRAMS</h5>
          <a href="#">
            <p>Fixed responsive - <span className='f-body'> Just Now</span></p>
          </a>
          <a href="#">
            <p>New portfolio grid layout - <span className='f-body'> Just Now</span></p>
          </a>
          <a href="#">
            <p>Tested & approved wp 3.6 - <span className='f-body'> Just Now</span></p>
          </a>
          <a href="#">
            <p>Fixed google map issue -<span className='f-body'> Just Now</span></p>
          </a>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5 class="text-white mb-3">LEARNING</h5>
          <a href="#">
            <p>Our Plans</p>
          </a>
          <a href="#">
            <p>Free Trail</p>
          </a>
          <a href="#">
            <p>Academic Solutions</p>
          </a>
          <a href="#">
            <p>Business Solutions</p>
          </a>
        </div>
        <div class="col-lg-3 col-md-3">
          <h5 class="text-white mb-3">SUPPORTFORM</h5>
          <p className='f-para'>Write your mail into below field and join our<br /> quick support forum.</p>
          <form action="#">
            <div class="input-group">
              <input class="form-control no-border" type="text" placeholder="Email address"
                aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button class="btn-custom success">Get help</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </footer>
    {/* copyright section */}
    <div class="copyright">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <span>Copyright © 2019 learned</span>
        </div>
        <div class="col-md-6">
          <div class="copyright-menu">
            <ul>
              <li>
                <a href="#">Site Map</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Website Use Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
 </>

  )
}

export default Footer
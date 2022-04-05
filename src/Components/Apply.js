import React from 'react'
import "../ComponentsCss/ApplyStyles.css"
import graduation from "../assets/graduation.svg"
import standing from "../assets/standing.svg"

const Apply = () => {
  return (
    <div class="container-fluid">
    <div class="banners">
      <img class="graduation" src={graduation} alt="gradation"/>
      <p class="small">START YOUR COURSES!<span className="sub-small">
          TRY NOW FOR
          FREE</span><br /><span class="black-l">Are you ready to work faster?</span></p>
    </div>
    <div id="login-box">
      <div class="left">
        <div class="head-apply">
          <p class="apply-title">Apply Now</p>
        </div>
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="email" placeholder="E-Mail Address" />
        <input type="password" name="password" placeholder="Choose Password" />
        <input type="password" name="password2" placeholder="Confirm Password" />
        <div class="down">
          <div class="tacbox">
            <input id="checkbox" type="checkbox" />&nbsp;
            <label for="checkbox"> I agree with the terms and conditions. </label>
          </div>
          <div class="apply-btn-call">
            <div class="apply-btn"><button class="vist">Apply Now</button></div>
            <div class="apply-call">
              <h6>or call us</h6>
              <h6>+49 123 456 789</h6>
            </div>
          </div>
          <div class="have-acc">
            <p class="hv-acc">I already have an account</p>
          </div>
        </div>
      </div>
    </div>
    <img class="standing" src={standing} alt="gradation"/>
  </div>
  )
}

export default Apply
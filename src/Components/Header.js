import React from 'react'
import "../ComponentsCss/HeaderStyles.css"
import happy from "../assets/reading.svg"
import book from "../assets/books.svg"

export const Header = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner w-100">
      <div className="carousel-item active">
        <div className="carousel-container">
          <div className="reading">
            <img src={happy} alt="My Happy SVG" />
          </div>
          <div className="banner-container">
            <h1 className="b-head" >Innovation for education and<br />socity * 1
            </h1>
            <p className="bold" >Our interdisciplinary majors and minors means you can <br /> chart
              your
              own course for academic success.</p>
            <button className="vist">visit our campus</button>
          </div>
          <div className="half-circle">
            <div className="circle">
              <div className="mini-circle"></div>
            </div>
          </div>
          <div className="books">
            <img src={book} alt="books" />
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-container">
          <div className="reading">
            <img src={happy} alt="My Happy SVG" />
          </div>
          <div className="banner-container">
            <h1 className="b-head" >Innovation for education and<br />socity * 2
            </h1>
            <p className="bold" >Our interdisciplinary majors and minors means you can <br /> chart
              your
              own course for academic success.</p>
            <button className="vist">visit our campus</button>
          </div>
          <div className="half-circle">
            <div className="circle">
              <div className="mini-circle"></div>
            </div>
          </div>
          <div className="books">
            <img src={book} alt="books" />
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-container">
          <div className="reading">
            <img src={happy} alt="My Happy SVG" />
          </div>
          <div className="banner-container">
            <h1 className="b-head" >Innovation for education and<br />socity * 3
            </h1>
            <p className="bold" >Our interdisciplinary majors and minors means you can <br /> chart
              your
              own course for academic success.</p>
            <button className="vist">visit our campus</button>
          </div>
          <div className="half-circle">
            <div className="circle">
              <div className="mini-circle"></div>
            </div>
          </div>
          <div className="books">
            <img src={book} alt="books" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

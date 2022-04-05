import React from 'react'
import "../ComponentsCss/NewsSectionStyles.css"
import vadim from "../assets/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg"

const NewsSection = () => {
  return (
    <div className="section container">
    <div className="video">
      <div className="outer-circle"></div>
      <div className="collage-border">
        <div className="college-video">
          <img className="collage-img" src={vadim} />
          <i className="fa-solid fa-circle-play"></i>
        </div>
      </div>
    </div>
    <div className="discription">
      <h1 className='dis-head'>Limitless learning, more possibilities</h1>
      <p className='dis-body'>The University of Rochester is one of the country's top-tier
        research universities. Our campuses are home to 200
        academic majors, more than 2,000 faculty and instructional
        staff, and some 10,000 students approximately half of whom
        are women.</p>
      <p className='dis-body'>Learning at the University of Rochester is also on a very personal scale. Rochester
        remains one of the smallest and most collegiate among top research universities, with smaller classes,
        a low 10:1 student to teacher ratio, and increased interactions with faculty.</p>
      <div className="count">
        <div className="students">
          <h1 className="numbers">4000</h1>
          <p className="titles">Students</p>
        </div>
        <div className="courses">
          <h1 className="numbers">260</h1>
          <p className="titles">courses</p>
        </div>
        <div className="hours">
          <h1 className="numbers">5679</h1>
          <p className="titles">hours videos</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsSection
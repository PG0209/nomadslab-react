import React from 'react'
import "../ComponentsCss/FormsStyles.css"

const Forms = () => {
  return (
    <div className="form-section">
        <div className="form">
      <div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
          data-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-location-dot"
           ></i><span>Votre destination?</span> <i className="fa-solid fa-angle-down"
           ></i> </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">Australia</a></li>
          <li><a className="dropdown-item" href="#">India</a></li>
          <li><a className="dropdown-item" href="#">United States</a></li>
        </ul>
      </div>
      <div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
          data-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-calendar-days"
           ></i><span>Periode de
            depart</span><i className="fa-solid fa-angle-down"></i> </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <input className="dropdown-item" type="date" placeholder="DD/MM/YYYY"/>
        </ul>
      </div>
      <div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
          data-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-gear"
           ></i><span>Campagnie</span> <i className="fa-solid fa-angle-down"
           ></i> </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">Campagnie One</a></li>
          <li><a className="dropdown-item" href="#">Campagnie Two</a></li>
          <li><a className="dropdown-item" href="#">Campagnie Three</a></li>
        </ul>
      </div>
      <div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
          data-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-train-subway"
           ></i><span>Port de depart</span> <i className="fa-solid fa-angle-down"
           ></i> </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#">Station One</a></li>
          <li><a className="dropdown-item" href="#">Station Two</a></li>
          <li><a className="dropdown-item" href="#">Station Three</a></li>
        </ul>
      </div>
      <div className="dropdown">
        <button className="btn-custom">Recharge</button>
      </div>
    </div>
    </div>
  )
}

export default Forms
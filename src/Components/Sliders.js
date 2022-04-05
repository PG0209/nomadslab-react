import React from "react";
import "../ComponentsCss/SlidersStyles.css";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
  width: 260px;
  color:black;
  margin: 5px 15px;
  font-size: 4em;
  @media (max-width: 680px) {
    height: 180px;
    width: 220px;
  }
  @media (max-width: 580px) {
    height: 150px;
    width: 150px;
  }
  @media (max-width: 310px) {
    height: 110px;
    width: 110px;
  }
`;

const Div = styled.div`
  margin: 30px;
  position: relative;
`;

const breakPoints = [
  { width: 290, itemsToShow: 1 },
  { width: 424, itemsToShow: 2 },
  { width: 480, itemsToShow: 3 },
  
];

const Sliders = () => {
  return (
    <Div>
      <Carousel breakPoints={breakPoints}>
        <Item className="item1">
          <div className="cards">
            <div className="icon">
              <img
                className="icons-img"
                src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/000000/external-engineer-labour-day-nawicon-detailed-outline-nawicon.png"
              />
            </div>
            <div className="name">
              <h4>Engineering</h4>
            </div>
          </div>
        </Item>
        <Item className="item2">
          <div class="cards">
            <div class="icon">
              <img
                class="icons-img"
                src="https://img.icons8.com/ios/50/000000/accounting.png"
              />
            </div>
            <div class="name">
              <h4>Accounting</h4>
            </div>
          </div>
        </Item>
        <Item className="item3">
        <div class="cards">
        <div class="icon">
          <img class="icons-img"
            src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-creative-graphic-design-icongeek26-outline-icongeek26.png" />
        </div>
        <div class="name">
          <h4>Creative</h4>
        </div>
      </div>
        </Item>
        <Item className="item4">
        <div class="cards">
        <div class="icon">
          <img class="icons-img" src="https://img.icons8.com/wired/64/000000/design.png" />
        </div>
        <div class="name">
          <h4>Design</h4>
        </div>
      </div>
        </Item>
        <Item className="item5">
        <div class="cards">
        <div class="icon">
          <img class="icons-img" src="https://img.icons8.com/dotty/80/000000/physics.png" />
        </div>
        <div class="name">
          <h4>Physics</h4>
        </div>
      </div>
        </Item>
        <Item className="item6">
        <div class="cards">
        <div class="icon">
          <img class="icons-img"
            src="https://img.icons8.com/external-fauzidea-detailed-outline-fauzidea/64/000000/external-chemistry-back-to-school-fauzidea-detailed-outline-fauzidea.png" />
        </div>
        <div class="name">
          <h4>Chemistry</h4>
        </div>
      </div>
        </Item>
      </Carousel>
    </Div>
  );
};

export default Sliders;

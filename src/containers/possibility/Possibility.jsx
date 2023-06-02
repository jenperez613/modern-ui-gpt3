import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="woman with VR headset" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        So what is this future? Think of the metaverse as a parallel virtual
        plane of existence that spans all digital technologies and will even
        come to control much of the physical world. This construct helps explain
        another common description of the metaverse as a 3D internet—and why
        establishing it is so hard, but also likely to be worthwhile.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;

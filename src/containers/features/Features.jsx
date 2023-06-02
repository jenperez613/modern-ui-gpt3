import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "How AI is set to Evolve in 2022",
    text: "While AI still has a long way to go before anything like human-level intelligence is achieved, it hasn’t stopped the likes of Google, Facebook and Amazon investing billions of dollars.",
  },
  {
    title: "Responsible AI",
    text: " The development of AI is highly regulated.  The GDPR and CCPA regulations ensure AI transparency because of the use of personal and private data for essential decisions.",
  },
  {
    title: "Multi-Objective Models",
    text: "At the moment AI models are developed for a single purpose at any given time.    In the future, multi-task models that are able to perform multiple tasks will become possible.",
  },
  {
    title: "Design with AI",
    text: "Creating new images from text. Creating innovative designs that can be produced on a large production scale.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now. Step into the Future Today & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3?"
        text="Its goal is to be the first to create AGI—a machine with the learning and reasoning powers of a human mind. The purpose is not world domination; rather, the lab wants to ensure that the technology is developed safely and its benefits distributed evenly to the world."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination.
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="You've probably interacted with a chatbot whether you know it or not. For example, you're at your computer researching a product, and a window pops up on your screen asking if you need help."
      />
      <Feature
        title="Knowledgebase"
        text="Real-world knowledge plays a vital role in human intelligence. So, too, does a knowledge base in AI. How so? A knowledge base in artificial intelligence aims to capture human expert knowledge to support decision-making, problem-solving, and more."
      />
      <Feature
        title="Education"
        text="The connection between AI and education involves three areas: learning with AI (e.g. the use of AI-powered tools in classrooms), learning about AI (its technologies and techniques) and preparing for AI (e.g. enabling all citizens to better understand the potential impact of AI on human lives)."
      />
    </div>
  </div>
);

export default WhatGPT3;

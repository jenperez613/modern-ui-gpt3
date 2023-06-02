import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from ".";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening. <br /> We&apos;re blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 2, 2022"
          text="GPT-3 and OpenAI is the future. That future is now."
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 1, 2022"
          text="A11y and AI. How can we make the web more accessible?"
        />
        <Article
          imgUrl={blog03}
          date="Aug 26, 2022"
          text="WTF are NFTs? What is a blockchain? Your guide to Web3."
        />
        <Article
          imgUrl={blog04}
          date="Aug 23, 2022"
          text="AI programming? How Machine Learning is changing the way we code."
        />
        <Article
          imgUrl={blog05}
          date="Aug 15, 2022"
          text="GPT-3 and OpenAI is the future. Is the world ready? "
        />
      </div>
    </div>
  </div>
);

export default Blog;

import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-wrapper">
      <h1 className="blog-title">About myself</h1>
      <p className="blog-descr">
        Studying in the 9th grade, I'm playing basketball and love to code. I'm
        absolutely in love with people who have critical thinking and can think
        out of the box!<br/>
        Also, I'm volunteer at Jewish Community Center in my city. I have my own parrot named Alice and I love her! {"❤️"} <br/>
        <div className="mt-6">
          My motto - "Trust the proccess."
        </div>
      </p>
    </div>
  );
}

export default Blog;

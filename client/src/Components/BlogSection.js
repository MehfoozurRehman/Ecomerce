import React from "react";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <a href="#" className="blog__section">
      <div className="blog__section__header">
        <div className="blog__section__heading">Latest from blog</div>
        <button className="blog__section__cta">See all</button>
      </div>
      <div className="blog__section__content">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </a>
  );
}

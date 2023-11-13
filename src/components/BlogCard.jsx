import React from "react";
import { Link } from "react-router-dom";

function BlogCard({blog, blogDate, blogTitle, blogdesc, blogimg}) {
  return (
    <>
      <div class="card blog-card" style={{width:"18rem"}}>
        <img src={blogimg} class="card-img-top blog-img" alt="..." />
        <div class="card-body">
          <p className="blog-date">{blogDate}</p>
          <h5 class="card-title blog-title">{blogTitle}</h5>
          <p class="card-text blog-text">
            {blogdesc}
          </p>
          <Link to={`/blogs/${blog.id}`}><button className="btn blog-btn">Read more</button></Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;

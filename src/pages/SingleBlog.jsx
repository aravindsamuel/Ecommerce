import React from "react";
import { Blogs } from "../dataSource";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  let { id } = useParams();
  return (
    <>
      <div className="blog-wrapper home-wrapper-2 py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <h3 className="title mb-0">
                  {Blogs[id].title}
                </h3>
                <img src={Blogs[id].img} className="img-fluid singleblog-img w-100 my-3" alt="blog" />
                <p><b className="text-dark">{Blogs[id].shortdesc}</b></p>
                <p>{Blogs[id].longdesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

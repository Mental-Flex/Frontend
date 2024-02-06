import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import './Blog.css';


const Blog = () => {
  const [t, i18n] = useTranslation("global");
  

  
  return (
    <div data-spy="scroll" data-target=".main-nav">
      <section className="portfolio" id="portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 no-padding">
              <div className="section-title st-center">
                <h3>{t("blog.blog1")}</h3>
                <p>{t("blog.blog2")}</p>
              </div>

              <div style={{ marginLeft: '500px' }}>
      <iframe
        title="BlogFrame"
        width="70%"
        height="600"
        src="https://mental-flex.blogspot.com/"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

           

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

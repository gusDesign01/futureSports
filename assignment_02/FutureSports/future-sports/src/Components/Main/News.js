import React from "react";
import '../../App.css';

const News = ({ foundNewsArticle }) => {

    console.log("Found News Library:", foundNewsArticle);

      return (
        <div className="news">
          {foundNewsArticle && foundNewsArticle.title && foundNewsArticle.content ? (
            <>
              <h2>{foundNewsArticle.title}</h2>
              <p>{foundNewsArticle.content}</p>
            </>
          ) : (
            <p>No news available.</p>
          )}
        </div>
      );
    };

    export default News;
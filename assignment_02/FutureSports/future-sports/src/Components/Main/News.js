import React from "react";
import '../../App.css';

const News = ({ article }) => {
      return (
        <div className="news">
          {article && article.title && article.content ? (
            <>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </>
          ) : (
            <p>No news available.</p>
          )}
        </div>
      );
    };

    export default News;
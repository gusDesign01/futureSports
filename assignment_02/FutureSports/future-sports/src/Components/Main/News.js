import React from "react";

const News = ({ article }) => {

    return(
        <div className="news">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    )


};

export default News;
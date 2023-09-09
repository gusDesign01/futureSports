import React from "react";
import { useState } from "react";
import NewsLibrary from '../Assets/Files/NewsLibrary.json'

const NewsDict = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [newsData, setNewsData] = useState([]);

    const handleSearch = () => {
        const filteredNews = NewsLibrary.articles.filter((articles) =>

        articles.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setNewsData(filteredNews);
    };

    return (
        
        <div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

            <button onClick={handleSearch}>Search</button>

            <div className="newsDict">
                {newsData.map((newsItem) => (
                    <div key={newsItem.id} className="news-item">
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.summary}</p>
                        <p>{newsItem.customText}</p>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default NewsDict;
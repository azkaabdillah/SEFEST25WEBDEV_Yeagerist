import React, { useEffect, useState } from "react";
import "./styling/news.css";

const News = () => {
  const [news, setNews] = useState([]);
  const API_KEY = "340febe2d1e54f1ab65af3c6fc2ed810";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=bencana&language=id&pageSize=100&apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="container container-news mt-5 shadow-lg">
      <h1 className="text-center headline mb-4">Indeks Berita</h1>
      <div className="row justify-content-center">
        {news.map((item, index) => (
          <div key={index} className="col-md-4 col-card mb-4 center block">        
            <div className="card shadow-sm">
              <a href={item.url} target="_blank" rel="noreferrer" className="text-decoration-none">
                <img
                  src={item.urlToImage || "https://via.placeholder.com/600x300"}
                  className="card-img-top card-img-news"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-decoration">{item.title}</h5>
                  <p className="text-muted">{new Date(item.publishedAt).toLocaleDateString()}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

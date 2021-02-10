import React, { useEffect, useState } from "react";
import {MyApi} from "../util/MyApi.js";


const NewsField = () => {
    let [articles, setArticles] = useState([]);

    useEffect(() => {
      MyApi.getAllArticles().then(responseJson => {
        setArticles(responseJson.articles);
      });
  
    }, []);
      return (
          <div>
            {articles.map((articles) => 
              <div key={articles.id}>
                <hr />
                <h3>{articles.title}</h3>
                <p>{articles.created_at}</p>
                <p>{articles.body}</p>
              </div>
            )}
        </div>
      )
  } 

  export default NewsField


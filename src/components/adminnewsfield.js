import React, { useEffect, useState } from "react";
import {MyApi} from "../util/MyApi.js";
import DeleteButton from "../components/deletebutton"
import EditButton2 from "../components/editbuttontwo"


const AdminNewsField = () => {

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
                <h3 id="">{articles.title}</h3>
                <p>{articles.created_at}</p>
                <p>{articles.id}</p>
                <p>{articles.body.substr(0,40)}</p>
                <EditButton2 id={articles}/>
                <DeleteButton id={articles.id} />
              </div>
            )}
            <script type="text/javascript" src="./util/editfunction.js" ></script>
        </div>
      )

}

export default AdminNewsField
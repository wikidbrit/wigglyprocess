import React from "react";


const newsblock = (callback) =>{
  const apiRoot = "http://localhost:8081/api/articles.php"
  fetch(apiRoot)
  .then( (response) => (
      response.json().then(data =>(
          callback(data)
      ))
  ))
}


export default {
  newsblock
}
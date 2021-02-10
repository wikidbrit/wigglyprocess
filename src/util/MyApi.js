// const apiRequest = (callback) =>{
//     const apiRoot = "http://localhost:8081/api/articles.php"
//     fetch(apiRoot)
//     .then( (response) => (
//         response.json().then(data =>(
//             callback(data)
//         ))
//     ))
//   }

//   export default {
//     apiRequest
//   }


export class MyApi {
    static host = "http://localhost:8081/api/articles.php"

    static getAllArticles() {
        return fetch(MyApi.host + "/api/articles").then(response => response.json());
    };
}
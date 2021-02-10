import React from 'react'

const DeleteButton = (id) => {

    function refreshPage() {
        window.location.reload();
      }

    function DeleteAction(id) {
    let intId = parseInt(id.id)
        
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(
        {   
            "id": intId,
        });

    let requestOptions = {
    method: 'DELETE',
    body: raw,
    redirect: 'follow'
};

    fetch("http://localhost:8081/api/articles.php/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    refreshPage();
    }

    return (
        <div>
            <button style={{
                backgroundColor:'red',
                color:'white'
            }} onClick = {() => DeleteAction(id)}>Delete</button>
        </div>
    )
}

export default DeleteButton
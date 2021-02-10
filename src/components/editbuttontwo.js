import React, {useState} from 'react'

const EditButton2 = (articles) => {

    let article = articles.id
    
    const [editTitle, setTitle] = useState('')
    const [editBody, setBody] = useState('')
    
    const submitHandler = e => {
        e.preventDefault()
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        let raw = JSON.stringify(
                {   
                    "id": parseInt(article.id),
                    "title": editTitle,
                    "body": editBody
                });
  
        let requestOptions = {
        method: 'PUT',
        body: raw,
        redirect: 'follow'
        };
  
        fetch("http://localhost:8081/api/articles.php/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        window.location.reload();

            }

    return (
        <div>
            <form onSubmit = {submitHandler}>
            <input
                className="titletextedit"
                type="text"
                name="edittitle"
                placeholder="Enter New Title"
                value={editTitle}
                onChange={e => setTitle(e.target.value)}
                style={{
                    
                }}
            />
            <textarea
                style= {{
                    height:150,
                    width:750,
                }}
                className="bodytextedit"
                name="editbody"
                placeholder="Enter New Bodytext"
                value={editBody}
                onChange={e => setBody(e.target.value)}
                style={{
                    width:"500px"
                }}
                      />
                      <br></br>
            <button 
            type="submit"
                style={{
                backgroundColor:'lightgreen',
                color:'black'
            }}
            >Submit Edit</button>
        </form>
        </div>
        
    )
}

export default EditButton2
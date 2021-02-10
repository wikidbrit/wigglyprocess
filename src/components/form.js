import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
      super(props)

      this.state = {
          title: '',
          body: ''
      }
  }
  changeHandler = e => {
      this.setState({[e.target.name]: e.target.value})
  }

  refreshPage() {
    window.location.reload();
  }

  
  submitHandler = e => {
      e.preventDefault()
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify(
              {   
                  "id":"",
                  "title": this.state.title,
                  "body": this.state.body
              });

      let requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow'
      };

    
      fetch("http://localhost:8081/api/articles.php/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
          }
          
  
  render() {
  const {title, body} = this.state
 
      return (
          <div>
              <form onSubmit={this.submitHandler}>
                  <div>
                      <input
                          type="text"
                          name="title"
                          placeholder="Title"
                          value={title}
                          onChange={this.changeHandler}
                      />
                      <textarea
                          style= {{
                              height:250,
                              width:750,
                          }}
                          name="body"
                          placeholder="Body"
                          value={body}
                          onChange={this.changeHandler}
                      />
                      <br />
                      <button type="submit" onClick={this.refreshPage}>Submit</button>
                  </div>
              </form>
          </div>
      )
  }
}

export default Form
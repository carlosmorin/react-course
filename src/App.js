import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Blog extends Component{

  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    let promise = fetch('https://jsonplaceholder.typicode.com/posts');
    promise.then(response => response.json()).then(data=>{
      this.setState({ articles: data })
    });
  }

  render(){
    return (
      <div>
      {
        this.state.articles.map((article)=>{
          return(
            <div className="card mt-1" style={ { backgroundColor: 'blue' } }>
              <p>{ article.title }</p>
            </div>
          )  
        })
      }
      </div>
    )
  }
}

function App() {
  return (
    <div className="container">
      <Blog />
    </div>
  );
}

export default App;

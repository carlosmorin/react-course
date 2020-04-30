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
          return <p>{ article.title }</p>  
        })
      }
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Blog />
    </div>
  );
}

export default App;

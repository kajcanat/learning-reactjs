import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var i = 1;
    var myStyle = {
	fontSize: 25,
	color: '#FF0000'
    }
    return (
	<div>
	  <h1 style={myStyle}>Header {1+1}</h1>
	  <h1>{i == 1 ? 'True' : 'False'}</h1>
	  <h2>Content</h2>
	  <p data-myattribute="somevalue">This is the content</p>
	</div>
    );
  }
}

export default App;

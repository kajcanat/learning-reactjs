import React from 'react';

class App extends React.Component {
   constructor() {
    super();
    this.state = {
      header: "Header from state...",
      content: "Content from state",
      data: []
    } 
    this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler()  {
     var item = "setState...";
     var myArray = this.state.data.slice();
         myArray.push(item);
     this.setState({data: myArray})	
   };
   render() {
      return (
         <div>
	  <button onClick = {this.setStateHandler}>SET STATE</button>
	  <h4>State array: {this.state.data}</h4>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class TableRow extends React.Component {
  render() {
    return (
	<tr>
	<td>{this.props.data.id}</td>
	<td>{this.props.data.name}</td>
	<td>{this.props.data.age}</td>
	</tr>
    );
  }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App;

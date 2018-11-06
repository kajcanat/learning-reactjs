import React from 'react';

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      header: "Header from state...",
      content: "Content from state",
      data: 
      [
	{"id":1, name:"John", age:21},
	{"id":2, name:"Bob", age:31},
	{"id":3, name:"Francine", age:41}
      ]
    } 
   }
   render() {
      return (
         <div>
            <Header headProp = {this.state.header} />
	    <Content contentProp = {this.state.content} />
            <table>
		<tbody>
		{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
		</tbody>
	    </table>
	    <div>
	     <h1>{this.state.header}</h1>
	     <h1>{this.state.content}</h1>
	    </div>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
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
            <h2>Content : {this.props.contentProp }</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App;

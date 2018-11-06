import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
   constructor() {
    super();
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
            <Header/>
            <table>
		<tbody>
		{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
		</tbody>
	    </table>
	    <div>
	     <h3>Array {this.props.propArray}</h3>
	     <h3>Bool: {this.props.propBool ? "True": "False"}</h3>
     	     <h3>Func: {this.props.propFunc(3)}</h3>
	     <h3>Number: {this.props.propNumber}</h3>
	     <h3>String: {this.props.propString}</h3>	
	     <h3>Object: {this.props.propObject.objectName1}</h3>
             <h3>Object: {this.props.propObject.objectName2}</h3>
             <h3>Object: {this.props.propObject.objectName3}</h3>
	     <h1>{this.state.content}</h1>
	    </div>
         </div>
      );
   }
}
console.log(PropTypes.array);

App.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: false,
  propFunc: function(e){return e},
  propNumber: 1,
  propString: "String value...",
  propObject: {
    objectName1: "objectValue1",
    objectName2: "objectValu2",
    objectName2: "objectValue3"
  }
};
App.propTypes = {
 propArray: PropTypes.array.isRequired,
 propBool: PropTypes.bool.isRequired,
 propFunc: PropTypes.func,
 propNumber: PropTypes.number,
 propString: PropTypes.string,
 propObject: PropTypes.object
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

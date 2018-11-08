import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor() {
    super();
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   findDomNodeHandler() {
    let node = document.getElementById('node'); 
    ReactDOM.findDOMNode(node).style.color = 'blue';
   }
   render() {
      return (
         <div>
            <Header/>
            <div>
	     <button onClick={this.findDomNodeHandler}>Find DOM node</button>
	<div id="node">Node</div>
	    </div>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Find Dom Node</h1>
         </div>
      );
   }
}
export default App;

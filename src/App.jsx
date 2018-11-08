import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      data: 'Apple'
    }
    this.updateState = this.updateState.bind(this); 
    this.clearInput = this.clearInput.bind(this);	
   };
   updateState(e) {
     this.setState({data: e.target.value});
   }
   clearInput() {
     this.setState({data: ''});
     ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   render() {
      return (
         <div>
            <Header/>
	    <input value = {this.state.data} onChange= {this.updateState} ref = "myInput"></input>
	    <button onClick = {this.clearInput}>Clear</button>
	    <h4>{this.state.data}</h4>	
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Refs</h1>
         </div>
      );
   }
}
export default App;

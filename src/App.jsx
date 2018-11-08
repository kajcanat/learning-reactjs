import React from 'react';

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      data: 'Apple'
    }
    this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
     this.setState({data: 'Orange'});
   }
   render() {
      return (
         <div>
            <Header/>
	    <Content myDataProp = {this.state.data} updateStateProp = {this.updateState} />
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Forms complex</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
	   <button onClick= {this.props.updateStateProp}>Click</button>
           <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}
export default App;

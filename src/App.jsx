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
		<button onClick={this.updateState}>Click</button>
	 <h4>{this.state.data}</h4>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Events simple</h1>
         </div>
      );
   }
}
export default App;

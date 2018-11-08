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
     this.setState({data: e.target.value});
   }
   render() {
      return (
         <div>
            <Header/>
		<input type="text" value={this.state.data} onChange={this.updateState} />
	 <h4>{this.state.data}</h4>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Forms simple</h1>
         </div>
      );
   }
}
export default App;

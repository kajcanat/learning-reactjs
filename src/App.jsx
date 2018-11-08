import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      data: [ 
	{component: 'Annas',id:4},
	{component: 'Apple',id:1},
	{component: 'Orange',id:2},
	{component: 'Pear',id:3}
      ]
    }
   };
   render() {
      return (
         <div>
            <Header/>
	    <div>
	    {this.state.data.map((dynamicComponent, i) => <Content key= {i} componentData = {dynamicComponent}/>)}
	    </div>	
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Keys</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.componentData.component}</div>
	    <div>{this.props.componentData.id}</div>
         </div>
      );
   }
}
export default App;

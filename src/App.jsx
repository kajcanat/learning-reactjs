import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }
      this.increment = this.increment.bind(this)
   };
   increment() {
      this.setState({data: this.state.data + 1})
   }
   render() {
      return (
         <div>
	    <Header />
            <button onClick = {this.increment}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Lifecyle</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   componentWillMount() {
     console.log('component will mount')
   }
   componentDidMount() { 
     console.log('component did mount')
   }
   componentWillReceiveProps(newProps) {
     console.log('Component will receive props');
   }
   shouldComponentUpdate(newProps, newState) {
     return true;
   }
   componentWillUpdate(nextProps, nextState) {
     console.log('Component will update');
   }
   componentDidUpdate(prevProps, prevState) {
     console.log('component did update');
   }
   componentWillUnmount() {
    console.log('component will unmount'); 
   }
  render() {
    return (<div><h3>{this.props.myNumber}</h3></div>);
  }
}
export default App;

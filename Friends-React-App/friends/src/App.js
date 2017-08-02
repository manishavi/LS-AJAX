import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        Name:'',
        Age:'',
        email:''
      };
      this.addFriends = this.addFriends.bind(this);
      this.updateNewFriends = this.updateNewFriends.bind(this);
    }

    addFriends(event) {
      this.props.addFriends({
        Name:this.state.Name,
        Age:this.state.Age,
        email:this.state.email
      });
      this.setState({
        Name:'',
        Age:'',
        email:''
      });
    }

    updateNewFriends(event) {
      this.setState({
        newFriends: event.target.value
      });
    }
  render() {
    return (
      <div className="App">
      <form onSubmit={this.addFriends}>
      <label>
       <input
        onChange={this.updateNewFriends}
        placeholder="Name"
        value={this.state.addFriends}
        />
        </label>
        <label>
        <input
         onChange={this.updateNewFriends}
         placeholder="Age"
         value={this.state.addFriends}
         />
         </label>
         <label>
         <input
          onChange={this.updateNewFriends}
          placeholder="email"
          value={this.state.addFriends}
         />
         </label>
         <button onClick={() => this.addFriends()} className="btn btn-primary">Submit</button>
        </form>
        <ul>
         {this.props.friends.map((friends, i) => {
         return <li key={i}>{friends.value}</li>;
         })}
        </ul>
       <FriendsList/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};
 
export default connect(mapStateToProps)(App);
 

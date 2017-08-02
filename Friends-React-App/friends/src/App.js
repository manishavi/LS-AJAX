import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        newFriends:''
      };
      this.addFriends = this.addFriends.bind(this);
      this.updateNewFriends = this.updateNewFriends.bind(this);
    }

    addFriends(event) {
      event.preventDefault();
    }

    updateNewFriends(event) {
      this.setState({
        newFriends: event.target.value
      });
    }
  render() {
    return (
      <div className="App">
      <form onSubmit={this.newFriends}>
       <input
        onChange={this.updateNewFriends}
        placeholder="newFriends"
        value={this.state.newFriends}
        />
        <hr/>
        <button onClick={() => this.addFriends()} className="btn btn-primary">ADD FRIENDS DETAILS</button>
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
 

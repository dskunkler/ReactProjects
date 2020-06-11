import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/User';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    // Allows UI to show spinner while fetching.
    loading: false,
  };

  // Lifecycle method
  async componentDidMount() {
    // Allows us to set the loading state to true
    this.setState({ loading: true });
    // axios makes the call to the api to fetch the data
    const res = await axios.get('https://api.github.com/users');
    // after getting results set users and loading to false
    this.setState({ users: res.data, loading: false });
    // Shows all the Users from the api
    console.log(res.data);
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

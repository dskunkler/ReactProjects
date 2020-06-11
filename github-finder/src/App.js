import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    users: [],
    // Allows UI to show spinner while fetching.
    loading: false,
  };

  // // Lifecycle method
  // async componentDidMount() {
  //   // Allows us to set the loading state to true
  //   this.setState({ loading: true });
  //   // axios makes the call to the api to fetch the data
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // after getting results set users and loading to false
  //   this.setState({ users: res.data, loading: false });
  //   // Shows all the Users from the api
  //   // console.log(res.data);
  // }

  // Search Github Users
  searchUsers = async (text) => {
    if (text.length !== 0) {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data.items, loading: false });
    }
  };

  // Clear Users from State
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

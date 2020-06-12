import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  // Makes a text state
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter some text', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  // Sets the state of the text when typed.
  onChange = (e) =>
    // e.target.name instead of texts means it will work for email, text, etc
    this.setState({ /*text:  */ [e.target.name]: e.target.value });

  render() {
    // Destructuring: Allows us to eliminate this.props before function calls
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            // Set the input value to the text typed
            value={this.state.text}
            // Requires onChange otherwise value will be read only since its from a state
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {
          /*this.props.*/ showClear && (
            <button
              className='btn btn-light btn-block'
              onClick={/*this.props.*/ clearUsers}
            >
              Clear
            </button>
          )
        }
      </div>
    );
  }
}

export default Search;

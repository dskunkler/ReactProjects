import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  // useState hook
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter some text', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  // Sets the state of the text when typed.
  const onChange = (e) =>
    // e.target.name instead of texts means it will work for email, text, etc
    setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;

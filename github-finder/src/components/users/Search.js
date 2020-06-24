import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = ({}) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  // useState hook
  const [text, setText] = useState("");
  const { setAlert } = alertContext;

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter some text", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  // Sets the state of the text when typed.
  const onChange = e =>
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
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

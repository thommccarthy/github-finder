import React, { useState } from 'react';
import PropTypes from 'prop-types';

//forms in react generally have state on input
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  //pull piece of state, method to manipulate, and default value
  const [text, setText] = useState('');

  //updates the state of text with onChange method
  const onChange = (e) => {
    setText(e.target.value);
  };

  //use arrow functions inside react objects
  //"this" keyword responds differently
  const onSubmit = (e) => {
    //prevents page from reloading on submit
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

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
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
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

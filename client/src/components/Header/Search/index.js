import React, { useState, useContext, useCallback } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import Divider from '@material-ui/core/Divider';
import AllChallenges from '../../../context/AllChallengesContext';
import SearchTicket from './SearchTicket';
import useStyles from './SearchStyle';

const Search = ({ darkMode }) => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const allChallenges = useContext(AllChallenges).challenges;
  const [searchValue, setSearchValue] = useState('');

  const letterColor = {
    color: darkMode ? 'white' : 'black',
  };

  // search function to the the challenges
  const search = (e) => {
    setSearchValue(e.target.value);
    const { value } = e.target;
    if (value.length === 0) {
      setSearchValue('');
      setResults([]);
      return;
    }
    try {
      const filteredChallenges = [];
      for (let i = 0; i < allChallenges.length; i++) {
        if (allChallenges[i].name.toLowerCase().includes(value.toLowerCase())) {
          filteredChallenges.push(allChallenges[i]);
        }
      }
      setResults(filteredChallenges);
    } catch (error) {
    }
  };

  const closeSearch = useCallback(() => {
    setSearchValue('');
    setResults([]);
  }, []);

  const onSearchLoseFocus = () => {
    setTimeout(() => {
      setResults([]);
      setSearchValue('');
    }, 200);
  };

  const resultsList = results
    && results.length > 0
    && results.map((result) => (
      <SearchTicket darkMode={darkMode} ticket={result} key={result.id} closeSearch={closeSearch} />
    ));
  // search bar item
  const searchInput = (
    <div className={darkMode ? classes.search : classes.searchLight}>
      <div className={classes.searchIcon}>
        <SearchIcon style={letterColor} />
      </div>
      <InputBase
        style={letterColor}
        id="searchBar"
        placeholder="Search..."
        onChange={search}
        autoComplete="off"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onBlur={onSearchLoseFocus}
        value={searchValue}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
  const SearchContainerStyle = {
    backgroundColor: darkMode ? 'rgb(51,51,51)' : 'white',
    color: darkMode ? 'white' : 'black',
  };

  return (
    <>
      <div id="search">{searchInput}</div>
      <Divider />
      <div id="searchResults" className={results.length !== 0 ? 'open' : 'closed'}>
        <div className="display" style={SearchContainerStyle}>
          <div className="background-black-to-search" />
          {resultsList}
        </div>
      </div>
    </>
  );
};
export default Search;

import React, { useState, useEffect, useContext, useCallback } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import AllChallenges from '../../../context/AllChallengesContext';
import SearchTicket from './SearchTicket';
import { useStyles } from './SearchStyle.js';
import { useDebounce } from '../../../utils';
import './Search.css';

const letterColor = {
  color: 'black',
};

const Search = () => {
  const classes = useStyles;
  const [results, setResults] = useState([]);
  const allChallenges = useContext(AllChallenges).challenges;
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  // search function to the the challenges
  const search = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  useEffect(() => {
    if (debouncedSearchValue.length === 0) {
      setSearchValue('');
      setResults([]);
      return;
    }
    try {
      const filteredChallenges = [];
      for (let i = 0; i < allChallenges.length; i++) {
        if (
          allChallenges[i].name
            .toLowerCase()
            .includes(debouncedSearchValue.toLowerCase())
        ) {
          filteredChallenges.push(allChallenges[i]);
        }
      }
      setResults(filteredChallenges);
    } catch (error) {}
  }, [debouncedSearchValue, allChallenges]);

  const closeSearch = useCallback(() => {
    setSearchValue('');
    setResults([]);
  }, []);

  const onSearchLoseFocus = useCallback(() => {
    setTimeout(() => {
      setResults([]);
      setSearchValue('');
    }, 200);
  }, []);

  const resultsList =
    results &&
    results.length > 0 &&
    results.map((result) => (
      <SearchTicket ticket={result} key={result.id} closeSearch={closeSearch} />
    ));

  return (
    <>
      <Divider />
      <div id="search">
        <div className={classes.SearchLight}>
          <div className={classes.SearchIcon}>
            <SearchIcon style={letterColor} />
          </div>
          <InputBase
            style={letterColor}
            id="searchBar"
            placeholder="Search..."
            onChange={search}
            autoComplete="off"
            classes={{
              root: classes.InputRoot,
              input: classes.InputInput,
            }}
            onBlur={onSearchLoseFocus}
            value={searchValue}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </div>
      <div
        id="searchResults"
        className={results.length !== 0 ? 'open' : 'closed'}
      >
        <div className="display">
          <div className="background-black-to-search" />
          {resultsList}
        </div>
      </div>
    </>
  );
};

export default Search;

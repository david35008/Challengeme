import React, {
  useState, useEffect, useContext, useCallback,
} from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import Divider from '@material-ui/core/Divider';
import AllChallenges from '../../../context/AllChallengesContext';
import SearchTicket from './SearchTicket';
import useStyles from './SearchStyle';
import { useDebounce } from '../../../utils';

const letterColor = {
  color: 'black',
};

const Search = () => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const allChallenges = useContext(AllChallenges).challenges;
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  // search function to the the challenges
  const search = useCallback((e) => {
    setSearchValue(e.target.value);
    // eslint-disable-next-line
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
    // eslint-disable-next-line
  }, [debouncedSearchValue]);

  const closeSearch = useCallback(() => {
    setSearchValue('');
    setResults([]);
  }, [debouncedSearchValue]);

  const onSearchLoseFocus = useCallback(() => {
    setTimeout(() => {
      setResults([]);
      setSearchValue('');
    }, 200);
    // eslint-disable-next-line
  }, []);

  const resultsList = results
    && results.length > 0
    && results.map((result) => (
      <SearchTicket ticket={result} key={result.id} closeSearch={closeSearch} />
    ));

  return (
    <>
      <Divider />
      <div id="search">
        <div className={classes.searchLight}>
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

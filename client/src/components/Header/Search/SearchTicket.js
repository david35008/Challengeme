import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import './SearchTicket.css';
import Divider from '@material-ui/core/Divider';

const dividerColor = {};
const letterColor = {
  color: 'black',
};

function SearchTicket({ ticket, closeSearch }) {
  const rating = ticket.averageRaiting;

  return (
    <Link to={`/challenges/${ticket.id}`} style={{ textDecoration: 'none' }}>
      <div className="SearchTicket" style={letterColor} onClick={closeSearch}>
        <div className="ticketName">{ticket.name}</div>
        <div className="ticketRating">
          <Rating name=" " value={+rating} style={{ opacity: 1.5 }} disabled />
        </div>
      </div>
      <Divider style={dividerColor} />
    </Link>
  );
}

export default SearchTicket;

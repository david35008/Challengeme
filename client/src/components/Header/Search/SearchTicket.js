import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';

const SearchTicketContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2vh',
  borderRadius: '3px',
  '&:hover': {
    backgroundColor: 'rgba(180,180,180,0.8)',
  },
}));

const TicketName = styled('div')({
  color: 'black',
});

const TicketRating = styled('div')({
  color: 'black',
});

const dividerColor = {};
const letterColor = {
  color: 'black',
};

function SearchTicket({ ticket, closeSearch }) {
  const rating = ticket.averageRaiting;

  return (
    <Link to={`/challenges/${ticket.id}`} style={{ textDecoration: 'none' }}>
      <SearchTicketContainer onClick={closeSearch}>
        <TicketName>{ticket.name}</TicketName>
        <TicketRating>
          <Rating name=" " value={+rating} style={{ opacity: 1.5 }} disabled />
        </TicketRating>
      </SearchTicketContainer>
      <Divider style={dividerColor} />
    </Link>
  );
}

export default SearchTicket;

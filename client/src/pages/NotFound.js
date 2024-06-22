import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import pageNotFound from '../images/pageNotFound.png';

const Container = styled('div')({
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  textAlign: 'center',
});

const Heading = styled('h3')({
  fontSize: '50px',
});

const Paragraph = styled('p')({
  fontSize: '30px',
});

const GoHome = styled('div')({
  width: '200px',
  fontSize: '30px',
  margin: 'auto',
  cursor: 'pointer',
});

const NotFound = () => (
  <Container>
    <Heading>404 page not found</Heading>
    <Paragraph>
      We are sorry but the page you are looking for does not exist.
    </Paragraph>
    <Link to="/">
      <GoHome>Go Home</GoHome>
    </Link>
    <img src={pageNotFound} alt="Page Not Found" />
  </Container>
);

export default NotFound;

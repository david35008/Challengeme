import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/Landing.css';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  out: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const useStyles = makeStyles(() => ({
  challengeQuotes: {
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '50px',
    textShadow: '2px 2px 10px black',
    color: 'white',
  },
  loginHomePage: {
    marginBottom: '30px',
    color: 'white',
    padding: '20px 0',
    fontSize: '20px',
    margin: '20px',
    width: '150px',
    background: 'linear-gradient(45deg, #447CC6 30%, #315CAB 90%)',
  },
  registerHomePage: {
    marginBottom: '30px',
    padding: '20px 0',
    fontSize: '20px',
    margin: '20px',
    width: '150px',
    background:
      'linear-gradient(45deg, rgba(255, 255, 255, 0.54) 30%, white 90%)',
    color: 'black',
  },
  buttonsHomePage: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        id="container"
      >
        <div className={classes.challengeQuotes}>
          <div className="challengeMeTitleHomePage">
            <b>CHALLENGE ME</b>
          </div>
          <div className="challengeMeQuoteLanding">
            <div>
              <span>
                <b>Challenges</b>
                {' '}
              </span>
              are what make life interesting,
            </div>
            <div>and overcoming them is what makes life meaningful</div>
          </div>
        </div>
        <div className={classes.buttonsHomePage}>
          <Button
            className={classes.loginHomePage}
            component={Link}
            to="/login"
          >
            Log in
          </Button>
          <Button
            className={classes.registerHomePage}
            component={Link}
            to="/register"
          >
            register
          </Button>
        </div>
        <div className="wave" />
      </motion.div>
    </>
  );
}

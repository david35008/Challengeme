import React, { useEffect, useState, useContext } from 'react'
import Button from '@material-ui/core/Button';
import Cookies from "js-cookie";
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import network from '../services/network';
import ChallengeCard from '../components/ChallengeCard';
import { Typography } from '@material-ui/core';
import { Logged } from '../context/LoggedInContext';


const ApplyDialog = ({ open, onClose, onSubmit }) => {
  const [solutionRepository, setSolutionRepository] = useState('');
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Apply</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please type the Github solution repository in this format: owner/repo
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="repoPath"
          value={solutionRepository}
          onChange={({ target: { value } }) => setSolutionRepository(value)}
          label="Owner/repo"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => onSubmit(solutionRepository)} color="primary">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default function HomePage() {
  const [challenges, setChallenges] = useState([]);
  const [challengeToApply, setChallengeToApply] = useState();
  const [expandedChallenge, setExpandedChallenge] = useState();
  const value = useContext(Logged);
  const location = useHistory();
  useEffect(() => {
    (async () => {
      const { data: challengesFromServer } = await network.get('/api/v1/challenges')
      setChallenges(challengesFromServer);
    })();
  }, []);

  const applyToServer = async (challengeId, solutionRepository) => {

    await network.post(`/api/v1/challenges/${challengeId}/apply`, {
      solutionRepository
    })
  }

  const onApply = (challengeId) => {
    setChallengeToApply(challengeId)
  }

  const logOut = async () => {
    try {
      const { data: response } = await network.post('/api/v1/auth/logout', { token: Cookies.get("refreshToken") })
      location.push('/login');
      value.setLogged(false);
      Cookies.remove("refreshToken")
      Cookies.remove("accessToken")
      alert(response.message)
    } catch (error) {
      console.error(error)
    }
  }



  return (
    <div style={{ padding: 30, maxWidth: 840, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Challenges
      </Typography>
      <Button onClick={logOut} color="secondary">
        logOut
        </Button>
      {challenges.map(challenge => (
        <ChallengeCard
          key={challenge.id}
          cover={challenge.cover}
          challengeId={challenge.id}
          expanded={expandedChallenge === challenge.id}
          setExpanded={() => setExpandedChallenge(currentExpanded => {
            return currentExpanded === challenge.id ? false : challenge.id
          })}
          createdAt={challenge.createdAt}
          name={challenge.name}
          description={challenge.description}
          onApply={() => onApply(challenge.id)}
        />
      ))}
      <ApplyDialog
        open={!!challengeToApply}
        onSubmit={(solutionRepository) => {
          applyToServer(challengeToApply, solutionRepository);
          setChallengeToApply(false)
          setExpandedChallenge(challengeToApply);
        }}
        onClose={() => setChallengeToApply(false)}
      />
    </div>
  )
}
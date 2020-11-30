import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  TextareaAutosize,
  Button,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import ChooseLabels from '../../components/Choosers/ChooseLabels';
import network from '../../services/network';
import AddImg from '../../components/AddImg';
import './NewChallengeForm.css';

const textFieldStyle = { minWidth: '200px' };

/* function to generate alerts for bad or missing inputs */
const generateAlert = (title, message) => (
  <>
    <Alert severity="error">
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
    <br />
  </>
);

export default function NewChallengeForm() {
  const [optionsTypes, setOptionstypes] = useState([]);
  const [labels, setLabels] = useState([]);
  const [repoName, setRepoName] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [repoBoiler, setRepoBoiler] = useState('');
  const [repoDescription, setRepoDescription] = useState('');
  const [repoType, setRepoType] = useState('');
  const [chooseLabels, setChooseLabels] = useState([]);
  const [file, setFile] = useState({});
  const [badInput, setBadInput] = useState([]);
  const history = useHistory();

  /* pull challenge's type options from .github/workflows folder */
  const openOptions = async () => {
    try {
      const { data: types } = await network.get('/api/v1/types');
      setOptionstypes(
        types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        )),
      );
    } catch (error) {
    }
  };

  useEffect(() => {
    openOptions();
  }, []);

  /* validate data before poting */
  const spaces = new RegExp(/^(\s{1,})$/);
  const hebrew = new RegExp(/^.*([\u0590-\u05FF]{1,}).*$/);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBadInput = [];
    if (repoName.length < 1 || repoName.match(spaces) || repoName.match(hebrew)) {
      newBadInput.push(
        generateAlert(
          "Repository's name is too short",
          "Minimum 1 character. Don't use hebrew letters",
        ),
      );
    }
    if (repoLink === repoBoiler) {
      newBadInput.push(generateAlert('Repository links must be diffrent', ''));
    } else {
      try {
        if (repoLink.length > 2 && !repoLink.match(spaces) && !repoLink.match(hebrew)) {
          await network.get(`/api/v1/services/public-repo?repo_name=${repoLink}`);
        } else {
          throw new Error();
        }
      } catch (err) {
        newBadInput.push(
          generateAlert(
            "Repository's Link is not valid.\n Check the suggestions below:",
            "- Type the Github repository in this format: owner/repo\n- Change your repository to public\n- Check for type errors.\nDon't use Hebrew letters",
          ),
        );
      }
      try {
        if (
          repoBoiler.length > 2
          && !repoBoiler.match(spaces)
          && !repoBoiler.match(hebrew)
        ) {
          await network.get(`/api/v1/services/public-repo?repo_name=${repoBoiler}`);
        } else {
          throw new Error();
        }
      } catch (err) {
        newBadInput.push(
          generateAlert(
            "Repository's Boilerplate Link is not valid.\n Check the suggestions below:",
            "- Type the Github boilerplate repository in this format: owner/repo\n- Change your boilerplate repository to public\n- Check for type errors.\nDon't use Hebrew letters",
          ),
        );
      }
    }
    if (
      repoDescription.length < 20
      || !!repoDescription.match(spaces)
      || !!repoDescription.match(hebrew)
    ) {
      newBadInput.push(
        generateAlert(
          "Repository's Description is too short",
          "Minimum 2 characters. Don't use hebrew letters",
        ),
      );
    } else if (repoDescription.length > 500 || repoDescription.match(hebrew)) {
      newBadInput.push(
        generateAlert(
          "Repository's Description is too long",
          "Maximum 500 characters. Don't use hebrew letters",
        ),
      );
    }
    if (!repoType) {
      newBadInput.push(generateAlert("Repository's type not selected", ''));
    }
    if (Object.keys(file).length === 0 && file.constructor === Object) {
      newBadInput.push(generateAlert("Repository's image not selected", ''));
    }
    if (newBadInput.length > 0) {
      setBadInput(newBadInput);
      setTimeout(() => setBadInput([]), 8000);
    } else {
      const newRepo = {
        name: repoName,
        description: repoDescription,
        type: repoType,
        repositoryName: repoLink,
        boilerPlate: repoBoiler,
        // userId: get from headers or something  ------------------------------ XXXXXXXX -------------------------------
      };
      /* post newRepo to challenge table */
      try {
        const { data: postedRepo } = await network.post('/api/v1/challenges', newRepo);
        await network.post('/api/v1/image', {
          challengeId: postedRepo.id,
          img: file.result,
        });
        if (chooseLabels.length > 0) {
          await network.post(`/api/v1/labels/${postedRepo.id}`, { labels });
        }
        Swal.fire({
          icon: 'success',
          title: 'Your challenge was added successfuly!',
          showConfirmButton: false,
          timer: 3000,
        });
        history.push('/');
      } catch (error) {
        if (error.response.status === 400) {
          Swal.fire({
            icon: 'error',
            title: error.response.data,
            showConfirmButton: false,
            timer: 3000,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'An error has occurred. Please try again later',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      }
    }
  };

  /* add image */
  const handleFile = (value) => {
    if (value.src) {
      const i = new Image();
      i.src = value.src;

      i.onload = () => {
        const { width } = i;
        const { height } = i;
        if (width < 800) {
          Swal.fire('invalid image width', '', 'error');
          setFile({});
        } else if (height < 300) {
          Swal.fire('invalid image height', '', 'error');
          setFile({});
        } else {
          setFile(value);
        }
      };
    } else {
      setFile({});
    }
  };

  /* 'clear values' button */
  const handleReset = () => {
    setRepoName('');
    setRepoLink('');
    setRepoDescription('');
    setRepoType('');
    setFile({});
    setBadInput([]);
    setChooseLabels([]);
  };

  return (
    <div className="newChallenge">
      <form className="newChallengeForm">
        <Typography variant="h5" gutterBottom className="newChallengeFormheader">
          New Challenge
        </Typography>
        <TextField
          id="name"
          autoComplete="off"
          className="newChallengeFormFeild"
          label="Challenge name"
          onChange={(event) => setRepoName(event.target.value)}
          style={textFieldStyle}
        />
        <br />
        <TextField
          id="repo"
          autoComplete="off"
          className="newChallengeFormFeild"
          label="Challenge link"
          onChange={(event) => setRepoLink(event.target.value)}
          style={textFieldStyle}
        />
        <br />
        <TextField
          id="boiler"
          autoComplete="off"
          className="newChallengeFormFeild"
          label="Challenge boilerplate"
          onChange={(event) => setRepoBoiler(event.target.value)}
          style={textFieldStyle}
        />
        <br />
        <TextareaAutosize
          className="descriptionTextArea"
          autoComplete="off"
          aria-label="Description"
          rowsMin={6}
          placeholder="Challenge description..."
          onChange={(event) => setRepoDescription(event.target.value)}
          style={{ minWidth: 200, width: '40vw' }}
        />
        <br />
        <AddImg file={file} handleChange={handleFile} />
        <br />
        <div
          style={{ minWidth: '150px', width: 'fit-content' }}
        >
          <ChooseLabels
            labels={labels}
            setLabels={setLabels}
            setChooseLabels={setChooseLabels}
            chooseLabels={chooseLabels}
          />
        </div>
        <FormControl className="newChallengeFormFeild">
          <InputLabel id="Challenge type" style={textFieldStyle}>
            Challenge type
          </InputLabel>
          <Select
            labelId="Challenge type"
            id="types"
            className="newChallengeFormFeild"
            value={repoType}
            onChange={(event) => setRepoType(event.target.value)}
          >
            {optionsTypes}
          </Select>
        </FormControl>
        <br />
        <Typography color="error" className="newChallengeFormDisplayErrors">
          {badInput}
        </Typography>
        <br />
        <div className="newChallengeFormButtons">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            type="reset"
            onClick={handleReset}
          >
            clear values
          </Button>
        </div>
      </form>
    </div>
  );
}

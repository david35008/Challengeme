import React, { useEffect, useState, useContext, useCallback } from 'react';
import mixpanel from 'mixpanel-browser';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import AllChallenges from '../../context/AllChallengesContext';
import FilteredLabels from '../../context/FilteredLabelsContext';
import network from '../../services/network';
import ChooseLabels from '../../components/Choosers/ChooseLabels';
import ChallengesCarousel from '../../components/ChallengesCarousel';
import Footer from '../../components/Footer';
import '../../styles/Challenges.css';

export default function Challenges() {
  const currentLocation = useLocation();

  const allChallenges = useContext(AllChallenges).challenges;
  const filteredLabels = useContext(FilteredLabels);
  const allChallengesWithImgState = allChallenges.map((challenge) => ({
    ...challenge,
    img: false,
  }));

  const [challengesFiltered, setChallengesFiltered] = useState(
    allChallengesWithImgState,
  );
  const [labels, setLabels] = useState([]);
  const [chooseLabels, setChooseLabels] = useState([]);

  const getLabels = useCallback(async () => {
    try {
      const { data } = await network.get('/api/v1/labels');
      const optionsForSelector = data.map((labelData) => ({
        value: labelData.id,
        label: labelData.name,
      }));
      setChooseLabels(optionsForSelector);
      const newFilter = optionsForSelector.filter(
        (label) => label.value ===
          (filteredLabels ? filteredLabels.filteredLabels[0] : null),
      );
      setLabels(newFilter);
    } catch (error) {}
  }, [filteredLabels]);

  const setNewImg = useCallback((id, newImg) => {
    setChallengesFiltered((prev) => {
      const currentChallenges = prev.map((challenge) => {
        if (challenge.id === id) {
          challenge.img = newImg;
          return challenge;
        }
        return challenge;
      });
      return currentChallenges;
    });
  }, []);
  useEffect(() => {
    const user = Cookies.get('userName');
    mixpanel.track('User On Home Page', { User: `${user}` });
    return () => filteredLabels.setFilteredLabels([]);
  }, []);

  useEffect(() => {
    if (currentLocation.pathname !== '/challenges') {
      setLabels([]);
    } else {
      getLabels();
    }
  }, [currentLocation]);

  const filterLabels = useCallback(() => {
    try {
      if (filteredLabels.filteredLabels.length > 0) {
        const filteredByLabelChallenges = [];
        allChallenges.forEach((challenge) => {
          if (
            filteredLabels.filteredLabels.every((labelChallenge) => challenge.Labels.map((label) => label.id).includes(
              labelChallenge,
            ))
          ) {
            if (!filteredByLabelChallenges.includes(challenge)) {
              filteredByLabelChallenges.push(challenge);
            }
          }
        });
        setChallengesFiltered(filteredByLabelChallenges);
      } else {
        setChallengesFiltered(allChallenges);
      }
    } catch (error) {}
  }, [filteredLabels, allChallenges]);

  useEffect(() => {
    filterLabels();
  }, [filteredLabels]);

  return (
    <div className="home-page">
      <div className="All-Challenge-Image-Container">
        <div className="All-Challenge-Title-Container">
          <h1>Explore Your Kind Of challenge</h1>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <div
          className="All-Challenge-Choose-Labels"
          style={{ minWidth: '150px', width: 'fit-content' }}
        >
          <ChooseLabels
            labels={labels}
            chooseLabels={chooseLabels}
            setLabels={setLabels}
          />
        </div>
        <Button
          onClick={() => {
            filteredLabels.setFilteredLabels(
              labels ? labels.map((label) => label.value) : [],
            );
          }}
          variant="contained"
        >
          filter
        </Button>
      </div>
      <div className="All-Challenge-Challenges-Container">
        <div className="All-Challenge-Carousel">
          <p>Recommended For You:</p>
          <ChallengesCarousel
            challenges={challengesFiltered}
            setNewImg={setNewImg}
            main
            random
          />
        </div>
        <div className="All-Challenge-Carousel">
          <p>Front End Challenges:</p>
          <ChallengesCarousel
            challenges={challengesFiltered.filter(
              (challenge) => challenge.type === 'client-only',
            )}
            setNewImg={setNewImg}
          />
        </div>
        <div className="All-Challenge-Carousel">
          <p>Back End Challenges:</p>
          <ChallengesCarousel
            challenges={challengesFiltered.filter(
              (challenge) => challenge.type === 'server-mysql' ||
                challenge.type === 'server-only',
            )}
            setNewImg={setNewImg}
          />
        </div>
        <div className="All-Challenge-Carousel">
          <p>Full Stack Challenges:</p>
          <ChallengesCarousel
            challenges={challengesFiltered.filter(
              (challenge) => challenge.type === 'fullstack',
            )}
            setNewImg={setNewImg}
          />
        </div>
      </div>
      <div className="All-Challenge-Footer">
        <Footer color="black" />
      </div>
    </div>
  );
}

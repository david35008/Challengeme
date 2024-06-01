import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChallengeToCarousel from './ChallengeToCarousel';
import Loading from '../Loading';
// import { shuffleArray } from '../../utils';

const responsive = {
  0: { items: 3 },
  568: { items: 3 },
  868: { items: 3 },
  1228: { items: 4 },
  1500: { items: 5 },
  1800: { items: 6 },
  2100: { items: 7 },
  2400: { items: 8 },
  2700: { items: 9 },
  3000: { items: 10 },
};

function ChallengesCarousel({
  challenges, setNewImg, main, random = false,
}) {
  const [orderedChallenges, setOrderedChallenges] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    (async () => {
      if (random) {
        const newChallenges = [...challenges].reverse();
        setOrderedChallenges(newChallenges);
      } else {
        setOrderedChallenges(challenges);
      }
      setLoadingPage(false);
    })();
  }, [random, challenges]);

  const items = orderedChallenges.length > 0
    ? orderedChallenges.map((challenge) => (
      <ChallengeToCarousel
        key={challenge.id + challenge.name}
        id={challenge.id}
        name={challenge.name}
        author={challenge.Author.userName}
        submissionsCount={challenge.submissionsCount}
        img={challenge.img}
        setNewImg={setNewImg}
        main={main}
      />
    ))
    : [<h1>Not Found</h1>];

  const renderPrevButton = ({ isDisabled }) => (!isDisabled ? (
    <button className="Carousel-Prev-Button">
      <ArrowBackIosIcon fontSize="large" />
    </button>
  ) : (
    <div />
  ));

  const renderNextButton = ({ isDisabled }) => (!isDisabled ? (
    <button className="Carousel-Next-Button">
      <ArrowForwardIosIcon fontSize="large" />
    </button>
  ) : (
    <div />
  ));

  return !loadingPage ? (
    <div className="Carousel-Container">
      <AliceCarousel
        disableDotsControls
        // infinite
        mouseTracking
        items={items}
        responsive={responsive}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      />
    </div>
  ) : (
    <Loading />
  );
}

export default React.memo(ChallengesCarousel);

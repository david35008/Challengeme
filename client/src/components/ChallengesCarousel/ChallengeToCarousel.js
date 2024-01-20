import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import network from '../../services/network';
import '../../styles/ChallengesCarousel.css';

function ChallengeToCarousel({
  id,
  name,
  author,
  submissionsCount,
  img,
  setNewImg,
  main,
}) {
  const [challengeImage, setChallengeImage] = useState('');

  const fetchChallengeImage = useCallback(async () => {
    if (main) {
      if (img === false) {
        try {
          const { data: imgData } = await network.get(
            `/api/v1/images?id=${id}`,
          );
          setChallengeImage(imgData ? imgData.img : '');
          setNewImg(id, imgData.img);
        } catch (error) {}
      } else {
        setChallengeImage(img);
      }
    } else {
      setChallengeImage(img);
    }
    // eslint-disable-next-line
  }, [main, img, id]);

  useEffect(() => {
    fetchChallengeImage();
    // eslint-disable-next-line
  }, [img]);
  return (
    <Link className="Challenge-To-Carousel-Link" to={`/challenges/${id}`}>
      <div
        className="Challenge-To-Carousel"
        style={{
          backgroundImage: `url('${challengeImage}')`,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div className="Challenge-To-Carousel-Header">{name}</div>
          <div className="Challenge-To-Carousel-Author">
            By
            {author}
          </div>
          <div className="Challenge-To-Carousel-Submission">
            {submissionsCount}
            {' '}
            submissions
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ChallengeToCarousel;

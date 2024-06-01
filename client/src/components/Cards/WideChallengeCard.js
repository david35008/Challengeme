import React, { useEffect, useState } from 'react';
// import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import network from '../../services/network';
import '../../styles/WideChallengeCard.css';

export default function ChallengeCard({
  name,
  description,
  labels,
  challengeId,
  // rating,
  // submissions,
  authorName,
  createdAt,
}) {
  const [coverImg, setCoverImg] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: coverImage } = await network.get(
          `/api/v1/images?id=${challengeId}`,
        );
        setCoverImg(coverImage ? coverImage.img : '');
        setLoading(false);
      } catch (error) {}
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <Link to={`/challenges/${challengeId}`} style={{ textDecoration: 'none' }}>
      <div className="challenge-card">
        <div className="chalenge-card-profile-pic">
          {!loading ? (
            coverImg.length > 0 && (
              <img
                className="challenge-card-img-homepage"
                src={coverImg}
                alt=" "
              />
            )
          ) : (
            <div className="challenge-card-img-homepage-loading" />
          )}
        </div>
        <div className="challenge-card-info">
          <div className="first-row-container">
            <span className="challenge-card-title">{name}</span>
            <div className="labels-container">
              {
                // getting the first 2 lables
                labels.map((label) => (
                  <span className="home-page-challenge-labels" key={label.id}>
                    {label.name}
                  </span>
                ))
              }
            </div>
          </div>

          <div className="second-row-container">
            {/* <Rating
              readOnly
              name="disabled"
              value={rating ? Math.round(rating) : 0}
            />
            <div className="number-of-submissions">
              {submissions}
              {' '}
              Submission
            </div> */}
          </div>

          <div className="challenge-card-description-homepage">
            {
              // slicing the description to 100 letters and adding 3 dots if sliced
              description.length < 100
                ? description
                : `${description
                  .slice(0, 100)
                  .split(' ')
                  .slice(0, -1)
                  .join(' ')}...`
            }
          </div>
          <div className="challenge-card-description-homepage">
            {`${createdAt.split('T')[0]} || by ${authorName}`}
          </div>
        </div>
      </div>
    </Link>
  );
}

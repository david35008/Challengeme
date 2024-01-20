import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import network from '../../services/network';
import './AdminChallengeCard.css';

export default function AdminChallengeCard({
  name,
  description,
  challengeId,
  authorName,
  createdAt,
  changeChallengeState,
  index,
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
  }, []);

  return (
    // <Link to={`/challenges/${challengeId}`} style={{ textDecoration: 'none' }}>
    <div className="admin-challenge-card">
      <div className="admin-chalenge-card-profile-pic">
        {!loading ? (
          coverImg.length > 0 && (
            <img
              className="admin-challenge-card-img-homepage"
              src={coverImg}
              alt=" "
            />
          )
        ) : (
          <div className="admin-challenge-card-img-homepage-loading" />
        )}
      </div>
      <div className="admin-challenge-card-info">
        <div className="first-row-container">
          <span className="admin-challenge-card-title">{name}</span>
        </div>
        <div className="admin-challenge-card-description-homepage">
          State:
          {' '}
          {description}
        </div>
        <div className="admin-challenge-card-description-homepage">
          {`${createdAt.split('T')[0]} || by ${authorName}`}
        </div>
        {description === 'denied' ? (
          <Button
            size="small"
            color="primary"
            onClick={(event) => changeChallengeState(event, challengeId, index)}
          >
            Approve
          </Button>
        ) : description === 'approved' ? (
          <Button
            size="small"
            color="primary"
            onClick={(event) => changeChallengeState(event, challengeId, index)}
          >
            Deny
          </Button>
        ) : (
          <>
            <Button
              size="small"
              color="primary"
              onClick={(event) => changeChallengeState(event, challengeId, index)}
            >
              Approve
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={(event) => changeChallengeState(event, challengeId, index)}
            >
              Deny
            </Button>
          </>
        )}
      </div>
    </div>
    // </Link>
  );
}

import React, { useContext, useCallback } from 'react';
import moment from 'moment';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { Logged } from '../../context/LoggedInContext';
import network from '../../services/network';
import AvatarProfile from './AvatarProfile';
import '../../styles/Review.css';

function Review({ author, createdAt, title, content, rating, reviewId }) {
  const navigate = useNavigate();

  const LoggedContext = useContext(Logged);

  const deleteReview = useCallback(async () => {
    try {
      const isDeleteOk = prompt("Who's your favorite student?");
      if (isDeleteOk != null) {
        await network.delete(`/api/v1/reviews/${reviewId}`);
      }
    } catch (error) {
      Cookies.remove('refreshToken');
      Cookies.remove('accessToken');
      Cookies.remove('userName');
      LoggedContext.setLogged(false);
      navigate('/');
    }
    // eslint-disable-next-line
  }, [reviewId, navigate]);

  return (
    <div className="Review">
      <div className="Review-Left">
        <div className="flex-row">
          <div className="Review-Avatar-Container">
            <AvatarProfile className="Review-Avatar" />
          </div>
          <div className="Review-Author">{author}</div>
        </div>
      </div>
      <div className="Review-Middle">
        <div className="Review-Title" cy-test="review-title">
          {title}
        </div>
        <div className="Review-CreatedAt">{moment(createdAt).fromNow()}</div>
        <div className="Review-Content">{content}</div>
      </div>
      <div className="Review-Right">
        <div className="flex-row">
          <div>
            <p className="Review-Rating-Number">{rating}</p>
          </div>
          <p className="Review-Rating-Part-Of">out of 5</p>
        </div>
      </div>
      {LoggedContext.isAdmin && (
        <DeleteIcon
          style={{ cursor: 'pointer' }}
          variant="contained"
          color="secondary"
          onClick={deleteReview}
        >
          Delete
        </DeleteIcon>
      )}
    </div>
  );
}

export default Review;

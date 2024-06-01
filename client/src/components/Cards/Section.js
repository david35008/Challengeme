import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function SimpleCard({
  head, content, picture, link, href,
}) {
  return (
    <Card className="Landing-page-Sections-Single-Card">
      <CardContent>
        <Typography
          className="Landing-page-Sections-Head"
          variant="h5"
          component="h2"
        >
          {head}
        </Typography>
        <Typography
          className="Landing-page-Sections-Content"
          variant="body2"
          component="p"
        >
          {content}
        </Typography>
        <div className="Landing-page-Sections-Picture">{picture}</div>
      </CardContent>
      <CardActions>
        {link && (
          <Link
            to={link}
            className="Landing-page-Sections-Learn-More"
            size="small"
          >
            Learn More
          </Link>
        )}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="Landing-page-Sections-Learn-More"
          >
            Learn More
          </a>
        )}
      </CardActions>
    </Card>
  );
}

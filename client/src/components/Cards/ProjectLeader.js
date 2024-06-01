import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function SimpleCard({
  icon,
  name,
  rule,
  content,
  github,
  linkedin,
}) {
  return (
    <Card className="Landing-page-Project-Leaders-Root">
      <CardContent>
        <IconButton
          href={`https://www.linkedin.com/in/${linkedin}`}
          target="_blank"
          className="Landing-page-Project-Leaders-Icon"
        >
          <img
            className="Landing-page-Project-Leaders-Image"
            src={icon}
            alt=" "
          />
        </IconButton>
        <IconButton
          style={{ margin: 0 }}
          href={`https://github.com/${github}`}
          target="_blank"
        >
          <Typography
            className="Landing-page-Project-Leaders-Name"
            variant="h5"
            component="h2"
          >
            {name}
          </Typography>
        </IconButton>
        <Typography
          className="Landing-page-Project-Leaders-Rule"
          variant="body2"
          component="p"
        >
          {rule}
        </Typography>
        <Typography
          className="Landing-page-Project-Leaders-Rule"
          variant="body2"
          component="p"
        >
          <IconButton
            style={{ margin: 0, fontSize: 14 }}
            href={`https://github.com/${github}`}
            target="_blank"
          >
            GitHub
          </IconButton>
          <IconButton
            style={{ margin: 0, fontSize: 14 }}
            href={`https://www.linkedin.com/in/${linkedin}`}
            target="_blank"
          >
            Linkedin
          </IconButton>
        </Typography>
        <Typography
          className="Landing-page-Project-Leaders-Content"
          variant="body2"
          component="p"
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SimpleCard({ icon, name, github }) {
  return (
    <Card className="Landing-page-Contributors-Root">
      <CardContent>
        <Typography
          className="Landing-page-Contributors-Name"
          variant="h5"
          component="h2"
        >
          {name}
        </Typography>
        <Typography
          className="Landing-page-Contributors-Icon"
          variant="h5"
          component="img"
          src={icon}
        />
        <div>
          {' '}
          <IconButton href={`https://github.com/${github}`} target="_blank">
            <GitHubIcon className="Landing-page-Contributors-Github-Icon" />
          </IconButton>
        </div>
        <Typography
          className="Landing-page-Contributors-Github"
          variant="body2"
          component="p"
        >
          {github}
        </Typography>
      </CardContent>
    </Card>
  );
}

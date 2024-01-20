import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

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

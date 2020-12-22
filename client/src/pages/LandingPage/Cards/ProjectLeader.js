import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default function SimpleCard({ icon, name, rule, content, github, linkedin }) {
    return (
        <Card className='Landing-page-Project-Leaders-Root'>
            <CardContent>
                <IconButton href={`https://www.linkedin.com/in/${linkedin}`} className='Landing-page-Project-Leaders-Icon'>  <img className='Landing-page-Project-Leaders-Image' src={icon} /></IconButton>
                <IconButton style={{margin: 0}} href={`https://github.com/${github}`}><Typography className='Landing-page-Project-Leaders-Name' variant="h5" component="h2">{name}</Typography></IconButton>
                <Typography className='Landing-page-Project-Leaders-Rule' variant="body2" component="p">{rule}</Typography>
                <Typography className='Landing-page-Project-Leaders-Content' variant="body2" component="p">{content}</Typography>
            </CardContent>
        </Card>
    );
}
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import ContactlessIcon from '@mui/icons-material/Contactless';
import CodeIcon from '@mui/icons-material/Code';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${theme.stepConnector.alternativeLabel}`]: {
    top: 17,
  },
  [`&.${theme.stepConnector.active} .${theme.stepConnector.line}`]: {
    backgroundImage:
      'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  },
  [`&.${theme.stepConnector.completed} .${theme.stepConnector.line}`]: {
    backgroundImage:
      'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  },
  [`& .${theme.stepConnector.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  '&.active': {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  '&.completed': {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
}));

function ColorlibStepIcon(props) {
  const { active, completed, icon } = props;

  const icons = {
    1: <PersonIcon />,
    2: <ContactlessIcon />,
    3: <SecurityIcon />,
    4: <CodeIcon />,
    5: <DoneOutlineIcon />,
  };

  return (
    <ColorlibStepIconRoot
      className={`${active ? 'active' : ''} ${completed ? 'completed' : ''}`}
    >
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const Root = styled('div')({
  width: '100%',
});

export default function CustomizedSteppers({ activeStep }) {
  const steps = [
    'Personal Details',
    'Contact Details',
    'Security',
    'Expertise',
    'Confirm',
  ];

  return (
    <Root>
      <Stepper
        alternativeLabel
        activeStep={activeStep - 1}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Root>
  );
}

CustomizedSteppers.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

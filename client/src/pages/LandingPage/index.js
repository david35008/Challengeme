import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import WalkingManIcon from '../../images/reactSvg/WalkingManIcon';
import Title from '../../images/reactSvg/Title';
import Stripes from '../../images/reactSvg/Stripes';
import Section from '../../components/Cards/Section';
import ProjectLeader from '../../components/Cards/ProjectLeader';
import Contributor from '../../components/Cards/Contributor';
import Integration from '../../images/reactSvg/Integration';
import ChallengeMySelf from '../../images/reactSvg/ChallengeMySelf';
import Teams from '../../images/reactSvg/Teams';
import TeacherAnalytics from '../../images/reactSvg/TeacherAnalytics';
import Boss from '../../images/reactSvg/Boss';
import Webhook from '../../images/reactSvg/Webhook';
import CreateChallenge from '../../images/reactSvg/CreateChallenge';
import Footer from '../../components/Footer';
import RoyShnitzer from '../../images/profilePictures/RoySnitzer.jpg';
import DavidDiamant from '../../images/profilePictures/DavidDiamant.jpg';
import DorKachlon from '../../images/profilePictures/DorKachlon.jpg';
import TsachOvadia from '../../images/profilePictures/TsachOvadia.jpg';
import '../../styles/LandingPage.css';

export default function LandingPage() {
  const SectionsCards = [
    {
      head: 'Challenge yourself',
      content: `Learn and Engage with challenges made by developers, for developers.
            Test based challenges in a variety of topics and levels,
             each designed to teach and broaden you understanding of code and Industry practices`,
      picture: <ChallengeMySelf />,
      link: '/challenges',
    },
    {
      head: 'Challenge your team',
      content: `Create and manage a team on ChallengeMe for your student, friends, or colleagues. 
            Learn together and compete against each other to become better codders. 
            Use ChallengeMe's extensive analytic systems to track your team's progress and qualifications`,
      picture: <Teams />,
      link: '/teams',
    },
    {
      head: 'Challenge Others',
      content: `Create Your own challenges for others to learn from and enjoy.
            practice good test practices and make something for the world to see`,
      picture: <TeacherAnalytics />,
      link: '/teams',
    },
    {
      head: 'Interview Candidate',
      content: `Create a challenge for a limited time and use it to test the mettle of potential recruits.
            Test them not only on their coding abilities, but also on how familiar they are with tests and git flow.`,
      picture: <Boss />,
    },
    {
      head: 'Integrate with ChallengeMe',
      content: `Use our exposed team creation API to Create and manage teams (eg. classes) on the ChallengeMe system.
            Define users as team leaders to allow them to manage the teams, view statistics and more.`,
      picture: <Integration />,
      href: 'https://suvelocity.github.io/challengeme/API/teams.html',
    },
    {
      head: 'Webhook - Stay up to date ',
      content: `Receive updates on events in the ChallengeMe system related to you and your team. 
            register a webhook on our system that will send http requests to a given address with updates on events as they happen.`,
      picture: <Webhook />,
      href: 'https://suvelocity.github.io/challengeme/API/webhooks.html',
    },
  ];

  const projectLeaders = [
    {
      icon: DavidDiamant,
      name: 'David Diamant',
      rule: 'Project Main Leader',
      content: `As a developer who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that ChallengeMe is one of the best resources out there for challenge yourself and others, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I can not recommend ChallengeMe highly enough.
            `,
      linkedin: 'davidiamant',
      github: 'david35008',
    },
    {
      icon: RoyShnitzer,
      name: 'Roy Shnitzer',
      rule: 'Project Main Leader',
      content: `ChallengeMe has been the backbone of preparing my technical coding skills. This allows you to work efficiently on the most common variations of the highest WEB development without having to spend hours battling the algorithm just to arrive at an inefficient or incorrect solution. There are plenty of resources available for rehearsal, but ChallengeMe differentiates its product by providing the 'how' and 'why' in clear and concise videos. Developing a deeper understanding of how to approach these issues is better than trying to memorize lines of code. I highly recommend ChallengeMe.
            `,
      linkedin: 'roy-shnitzer-1080671b7',
      github: 'RoyShnitzel',
    },
  ];

  const contributors = [
    {
      icon: DorKachlon,
      name: 'Dor Kachlon',
      github: 'DorKachlon',
    },
    {
      icon: 'https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-12.jpg',
      name: 'Alon Bruk',
      github: 'AlonBru',
    },
    {
      icon: TsachOvadia,
      name: 'Tsach Ovadia',
      github: 'ItsDrTsach',
    },
  ];

  return (
    <div className="Landing-page-main">
      <section className="Landing-page-title">
        <Title />
        <p className="Landing-page-under-title-paragraph">
          Dont limit your challenges Challenge your Limits
        </p>
      </section>
      <div className="Landing-page-Vector" />
      <section className="Landing-page-View">
        <div className="Landing-page-View-content">
          <h2>Up for the Challenge?</h2>
          <p>
            ChallengeMe is your best choice if you wish to master your coding
            skill, manage your class tasks and creating new challenges with many
            feauture’s to come
          </p>
          <div className="Landing-page-View-Buttons">
            <Link to="/challenges" className="Landing-page-View-GetStarted">
              Get started
            </Link>
            <a
              href="https://suvelocity.github.io/challengeme/Guides/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
              className="Landing-page-View-Learn-More"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="Landing-page-View-Hacker-walks">
          <WalkingManIcon />
        </div>
      </section>
      <span className="Landing-page-stripes">
        <Stripes />
      </span>
      <button className="Landing-page-Watch-Video">Watch Video</button>
      <section className="Landing-page-Sections-Cards">
        {SectionsCards.map((elem, i) => (
          <Section
            key={elem.head}
            head={elem.head}
            content={elem.content}
            picture={elem.picture}
            link={elem.link}
            href={elem.href}
          />
        ))}
      </section>
      <section className="Landing-page-Open-Source">
        <h2 className="Landing-page-Open-Source-H2">
          Hey... It’s an Open Source Project!
        </h2>
        <p className="Landing-page-Open-Source-P">
          ChallengeMe's source code is freely available to view, study and
          contribute to. This means you are free to use it as a base for your
          learning, as a class project or most anything else, and if you do a
          good enough job, your contributions could even be accepted into the
          Site. Our extensive CI/CD system ensures that any additions made will
          not be breaking, so you can rest assured that your contribution will
          not do any damage.
        </p>
        <a
          href="https://github.com/suvelocity/challengeme"
          target="_blank"
          rel="noopener noreferrer"
          className="Landing-page-Open-Source-Button"
        >
          Join the Team
          <IconButton>
            <GitHubIcon style={{ color: 'white' }} />
          </IconButton>
        </a>
      </section>
      <section className="Landing-page-Project-Leaders">
        <h2 className="Landing-page-Project-Leaders-H2">Project Leaders</h2>
        <div
          id="Landing-page-Project-Leaders"
          className="Landing-page-Project-Leaders-Cards"
        >
          {projectLeaders.map((elem) => (
            <ProjectLeader
              key={elem.content}
              icon={elem.icon}
              name={elem.name}
              rule={elem.rule}
              content={elem.content}
              linkedin={elem.linkedin}
              github={elem.github}
            />
          ))}
        </div>
      </section>
      <section className="Landing-page-Contributors">
        <h2 className="Landing-page-Contributors-H2">Contributors</h2>
        <div className="Landing-page-Contributors-Cards">
          {contributors.map((elem) => (
            <Contributor
              key={elem.name}
              icon={elem.icon}
              name={elem.name}
              github={elem.github}
            />
          ))}
        </div>
      </section>
      <section className="Landing-page-Build-Your-Own-Challenge">
        <div className="Landing-page-Build-Your-Own-Challenge-Board">
          <CreateChallenge />
        </div>
        <div className="Landing-page-Build-Your-Own-Challenge-content">
          <h2>Build Your Own Challenge?</h2>
          <p>
            ChallengeMe is the open-source, test based code learning program.
            Test based challenges work with industry standard technologies
            commonly found as part of QA and CI/CD systems, to check if
            submitted code holds up to scrutiny. You can create challenges and
            make them fit your needs exactly, to teach, test or evaluate the
            skills of prospective employees. If you or you team want to learn,
            teach or challenge yourselves in the world of software and web
            development, ChallengeMe is the way to go.
          </p>
          <div className="Landing-page-Build-Your-Own-Challenge-Buttons">
            <Link
              to="/AddNewChallenge"
              className="Landing-page-Build-Your-Own-Challenge-GetStarted"
            >
              Get started
            </Link>
            <a
              href="https://suvelocity.github.io/challengeme/Guides/addChallenge.html"
              target="_blank"
              rel="noopener noreferrer"
              className="Landing-page-Build-Your-Own-Challenge-Learn-More"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <div style={{ width: '50%', margin: 'auto' }}>
        <Footer />
      </div>
    </div>
  );
}

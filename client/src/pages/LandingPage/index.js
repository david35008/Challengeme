import React, { useEffect, useState, useContext } from 'react';
import mixpanel from 'mixpanel-browser';
import Cookies from 'js-cookie';
import WalkingManIcon from './SvgComponents/WalkingManIcon';
import Title from './SvgComponents/Title';
import Stripes from './SvgComponents/Stripes';
import Section from './Cards/Section';
import ProjectLeader from './Cards/ProjectLeader';
import Student from './SvgComponents/Student';
import Teams from './SvgComponents/Teams';
import TeacherAnalytics from './SvgComponents/TeacherAnalytics';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import './LandingPage.css';

export default function LandingPage() {
    // const [state, setState] = useState()

    // useEffect(() => {

    //     // eslint-disable-next-line
    // }, [])

    const SectionsCards = [
        {
            head: 'Student',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam consequuntur amet reprehenderit unde tenetur saepe fuga nobis voluptatum ipsam reiciendis est nemo dolorem molestias, molestiae ipsum minus quas eaque?
            `,
            picture: <Student />
        },
        {
            head: 'Teams',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam consequuntur amet reprehenderit unde tenetur saepe fuga nobis voluptatum ipsam reiciendis est nemo dolorem molestias, molestiae ipsum minus quas eaque?
            `,
            picture: <Teams />
        },
        {
            head: 'Teacher and Analytics',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam consequuntur amet reprehenderit unde tenetur saepe fuga nobis voluptatum ipsam reiciendis est nemo dolorem molestias, molestiae ipsum minus quas eaque?
            ` ,
            picture: <TeacherAnalytics />
        }
    ]

    const projectLeaders = [
        {
            icon: 'https://media-exp1.licdn.com/dms/image/C5635AQGtg-CmTPOa5w/profile-framedphoto-shrink_200_200/0/1605426981590?e=1608753600&v=beta&t=bL2Ss4-UVme-k5-ZVpLdr_ZltvdsPwTzpCBnL4v54Dk',
            name: 'David Diamant',
            rule: 'Project Main Leader',
            content: `As a developer who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that ChallenMe is one of the best resources out there for challenge yourself and others, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I can not recommend ChallemgeMe highly enough.
            `,
        },
        {
            icon: 'https://media-exp1.licdn.com/dms/image/C4E35AQEUumDeyAuetw/profile-framedphoto-shrink_200_200/0/1604073201265?e=1608753600&v=beta&t=bKbFqRbwuOE9Arl85haenkiThpT6rWU5khFqU6X1qJk',
            name: 'Roy Shnitzer',
            rule: 'Project Main Leader',
            content: `ChallengeMe has been the backbone of preparing my technical coding skills. This allows you to work efficiently on the most common variations of the highest WEB development without having to spend hours battling the algorithm just to arrive at an inefficient or incorrect solution. There are plenty of resources available for rehearsal, but ChallengeMe differentiates its product by providing the 'how' and 'why' in clear and concise videos. Developing a deeper understanding of how to approach these issues is better than trying to memorize lines of code. I highly recommend ChallengeMe.
            `,
        },
        {
            icon: 'https://media-exp1.licdn.com/dms/image/C4D03AQHitfXfdK1h_Q/profile-displayphoto-shrink_200_200/0/1517597484023?e=1614211200&v=beta&t=QhESfo63QFM3E89UG-LQoSANWQXf3lgaDBeWYU4_2qk',
            name: 'Guy Serfaty',
            rule: 'Moderator',
            content: `I'm just writing to thank you for this product. I had failed in so many technologies before, but I wanted to get into a top tech company so much that I even enrolled in a Master's program. Even then, I was unsure if I had what it takes to make it. From the moment I heard your first video explanation, I thought 'this is exactly the way to learn new technology' (plus the extra points you can grab by asking clarifying questions). After a few months of studying, mainly on ChallengeMe , I got offers to intern at Microsoft and Google!
            ` ,
        }
    ]

    return (
        <div className='Landing-page-main'>
            <section className='Landing-page-title'>
                <Title />
                <p className='Landing-page-under-title-paragraph' >
                    Dont limit your challenges
                    Challenge your Limits
            </p>
            </section  >
            <div className='Landing-page-Vector' />
            <section className='Landing-page-View'  >
                <div className='Landing-page-View-content'  >
                    <h2>Up for the Challenge?</h2>
                    <p>ChallengeMe is your best choice if you wish to master
                    your coding skill, manage your class tasks and creating
                      new challenges with many feauture’s to come</p>
                    <div style={{ display: 'flex' }}>
                        <button>Get started</button>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className='Landing-page-View-Hacker-walks'>
                    <WalkingManIcon />
                </div>
            </section>
            <span className='Landing-page-stripes'>
                <Stripes />
            </span>
            <button className='Landing-page-Watch-Video'>Watch Video</button>
            <suction className='Landing-page-Sections-Cards' >
                {SectionsCards.map(elem =>
                    < Section head={elem.head} content={elem.content} picture={elem.picture} />)
                }
            </suction>
            <section className='Landing-page-Open-Source' >
                <h2 className='Landing-page-Open-Source-H2'>Hey... It’s  an Open Source Project!</h2>
                <p className='Landing-page-Open-Source-P'>Lorem ipsum dolor sit amet consecrator
                adipisicing elit. Porro ullam consequuntur
                amet reprehenderit unde tenetur saepe
                fuga nobis voluptatum ipsam reiciendis est
                nemo dolorem molestias, molestiae ipsum
                        minus quas eaque?</p>
                <button className='Landing-page-Open-Source-Button' >Join the Team
                   <IconButton>
                        <GitHubIcon style={{ color: 'white' }} />
                    </IconButton></button>
            </section>
            <section className='Landing-page-Project-Leaders' >
                <h2 className='Landing-page-Project-Leaders-H2'>Project Leaders</h2>
                <div className='Landing-page-Project-Leaders-Cards'>
                    {projectLeaders.map(elem =>
                        < ProjectLeader icon={elem.icon} name={elem.name} rule={elem.rule} content={elem.content} />)
                    }
                </div>
            </section>

            {/* <div className='Heading-and-Buttons'></div> */}
            {/* <div className='Card-explanation-section'></div> */}
            {/* <div className='Auto-Layout'></div> */}
            {/* <div className='Its-Open-Source'></div> */}
            {/* <div className='Dont-limit-your-challenges-Challenge-your-Limits'></div> */}
            {/* <div className='Auto-Layout1'></div> */}
            {/* <div className='NavbarII'></div> */}
            {/* <div className='Project-Leaders'></div> */}
            {/* <div className='Contribute-Section'></div> */}
            {/* <div className='image-5'></div> */}
            {/* <div className='image-6'></div> */}
        </div>
    );
}
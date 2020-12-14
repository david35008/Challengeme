---
layout: default
title: Get Started
parent: Guides
has_children: false
nav_order: 6
---
# Getting Started
## Signup1
In order to start using ChallengeMe head on to the [Site](http://34.123.35.48:8080/) and sign up.  
![ChallengeMe Signup-Login Page](../photos/ChallengeMe-login.png) 
You'll receive an Email asking you to confirm and once you do you'll be able to log into the site.
## Finding a Challenge
When entering the site for the first Time, what you'll see will resemble this:
![ChallengeMe Home Page with coloured rectangles marking the different sections](../photos/main_page.png)
🟢 Green is for options and your profile.  
🔴 In Red is the main challenge feed, showing all the challenges.  You Can pick one if you'd like.  
🔵 In Blue are Search and Filters. You can look for a Challenge by its name or find challenges with certain topic by using the filter by label system.
## Starting a Challenge
Once you've clicked a challenge you'll see its details- like whho uploaded it and when it was last updated, as well as its ratings and reviews.
You can also see you have not yet solved it. Better get to it!  

![The page of the React 4-in-a-row challenge. you can see its details and Reviews. The user has yet to submit a solution to the challenge](../photos/challengePage.png)

Click the big blue "START THIS CHALLENGE" button.  
This Should lead you to the challenge "boilerplate" repository on GitHub. Should look something like this:
![boilerplate repo. we see the title "Challenge-Calculator", as well as some instructions and the 2 Contributors. There is a big illustration of the calculator that completing this challenge produces](../photos/boilerplate.png)
This is the template you'll use to start solving the challenge.  
It will usually include:
1. **Setup**- instructions on how to set the challenge up on you computer

1. **Requirements**- instructions on the requirements for completing the challenge

1.  **Template**- often there will be something to start off from, to save you time and busywork.

1.  **Tests**- the same tests used later to check your submission are included and can be run by you to test as you work  

Clone the Boilerplate to your computer and follow the instructions in the repository to start the challenge.
## Submitting a Solution
Once you have completed the challenge and you pass the tests with flying colours, it's time to submit your Solution.  
First make sure your solution repository is set up to be **public**.  
Head Back to [ChallengeMe](http://34.123.35.48:8080/) and find the challenge you have solved, and click "SUBMIT".

![Challenge submission modal](../photos/submit.png)

Fields:
- Solution repository: enter the end of the url in the following format: `username/solution-repository-name`.  The format is important the repo must be valid and public, else you won't be able to submit the solution.
- Rate the Challenge ⭐⭐⭐⭐⭐
- Kindly leave a review with constructive criticism.

Once you submit the Solution will be tested with tests Similar to those you had to use during development.  You can go to the [Actions tab](https://github.com/suvelocity/challengeme/actions) to see them happen in real time. if they fail you can also see why, same as you can locally.
If something isn't working as expected, consult the [troubleshooting page](../pages/troubleshooting.md)
<!-- TODO -->

![seeing the tests run in real time](../photos/running_action.png)

Once the tests have passed you can see the status has updated automatically. 
You have completed that challenge and that is yours forever.  
Go and tell your friends!
![Challenge page, now showing it was solved](../photos/completed.png)
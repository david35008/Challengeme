
# Contribution Guide
ChallengeMe is a n open source project and we encourage you to add from your skill and knowledge for the better of all.  
We are happy to see issues brought up in github by our users and are honoured to accept your contributions into are site.

You can see the WIP version of the site here on the [Staging Build](http://35.239.15.221:8080/)

## Table of Contents
- [Setup](#setup) 
  - [Server setup](#Server-setup)
  - [Client setup](#Client-setup)
  - [env parameters](#env-parameters)
  - [Startup](#startup)
  - [Only on First Time](#Only-On-first-time---init)
- [Working on the Project](#Working-on-the-project)
- [System Diagram](#system-diagram)

## Setup
Fork the [development repository](https://github.com/david35008/Challengeme-Development) to your account. clone it to your machine and go to the project folder.
### Server setup
from the root directory:
- run `cd server`
- run `npm i`
- depending on the changes you want to work on you may need to add certain parameters to the [`.env`](../server/.example.env) file for [certain systems](#env-parameters) to work.
### Client setup
- run `cd ../client`
- run `npm i`

### DataBase setup
the project uses [Sequelize](https://github.com/sequelize/sequelize) to exchange information with a **MySQL** DataBase.
to set it up locally:

- create new db for development - default name is `challenge` (can change by [`.env`](../server/.example.env) file). Also add to `.env` all the required data to connect to the database.
- run structure migrations: `npm run migrate`
- run test data seeds: `npx sequelize db:seed:all`

# Env Parameters
- Change the `.example.env` file's name to `.env` if you haven't already.

- Change `GITHUB_ACCESS_TOKEN` in `.env` file to your github token, you can learn more about that [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)
- Change `GITHUB_REPO` in `.env` file to your github forked repository
- Change `IP_ADDRESS` in .env file to your client ip address
- Change `SUVELOCITY_MAIL` in .env file to an email account you want to use for testing.
- Change `SUVELOCITY_PASSWORD` in .env file to the email's password. you can read about it [here](https://support.google.com/mail/answer/185833?hl=en-GB). You are not limited to Gmail of course.
- Change all tokens in `.env` file to some random characters (used as encryption keys)
  ```javascript
  REFRESH_TOKEN_SECRET
  RESET_PASSWORD_TOKEN
  ACCESS_TOKEN_SECRET
  EMAIL_TOKEN_SECRET
  ```
### Startup
Server:
- `cd server `
- `npm run dev` - nodemon hot reloads  

Client:
- `cd client`
- `npm start`


### Only On first time - init

- Enable **GitHub actions** in your forked repo - go to https://github.com/{your-user}/{your-repo}/actions and press "I understand my workflows, go ahead and enable them"

- Github has many issues when it comes to actions and forked repositories.    
If you need to add any change for files under [`.github/workflows`](../.github/workflows), in this step we just need to ensure Github is aware of those changes 🥵.  
You may need add a newline at the end of the file or change the name of the folder, then  commit it and change it back - in order to ensure the changes are noticed by Github.
- Create .env file from example and fill the params (repo name / access token)
- You should [create an access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) from a github user who has admin permission on the forked repo - if you don't, your team leader probably does.
---

## Working on the Project
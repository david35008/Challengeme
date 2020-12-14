---
layout: default
title: Teams
parent: API Reference 
has_children: false
nav_order: 6
---
# Registering Teams
{: .no_toc}  
You can use an http post request to Create teams (eg. classes) on the ChallengeMe system.  
These teams have users defined as **teachers** that can add other users to the team.

## Table Of Contents
{: .no_toc}
- TOC
{:toc}


## User Data
this is the data used for User registration (? denotes an optional property)
```JSON
{
  "userName": "david12", // the userName to be used for login.
  "email": "david@email.com",
  "leader"?: "true" // if the user is a team leader, use "true", else do not include. 
  "firstName"?: "david", 
  "lastName"?: "diamant",
  "country"?: "israel",
  "city"?: "tel aviv",
  "birthDate"?: "1997/05/07",
  "phoneNumber"?: "0501234567",
  "reasonOfRegistration"?: "challenge my self",
  "githubAccount"?: "davidGit123" //github user name
}
```
## Create a Team

### Request

To create a team on ChallengeMe send a `POST` request to:
```
POST http://35.239.15.221:8080/api/v1/webhook/team/create
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
The request body: (? means optional property)
```JSON
{
  "teamName": "crm", // name of the team
  "leaders": [
    { "userName":"roy"},
    { "userName":"tzach"}
  ], // array of objects with userNames that will be defined as the team's leaders and receive leader privileges
  "usersToCreate"?: user[] //array of users to create and enroll in the team
  "eventsRegistration"?: webhookRegistration //  Webhook registration data to register a webhook for the team
}
```
NOTE:
- Users data as defined in [here](#user-Data) page.  
- Webhook Registration data as defined in the [Webhooks](webhooks.md) page.  
- The request must contain at least one leader user. if that user does not exist it must be included in `usersToCreate` .
- The users property is optional, but if you choose to include it use it only to **create new users** and place them in the team
- Presently there is no way to use this endpoint to enroll existing students into the team, and trying to do so **will cause an error**


### Response
A successful request will receive a a response:
```JSON
{

}
```
### Errors
## Add Users to a Team

### Request

To create a team on ChallengeMe send a `POST` request to:
```
POST http://35.239.15.221:8080/api/v1/webhook/team/add-users
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```

The request body: (? means optional property)
```JSON
{
  "teamId": "77d2ccb6-e6e2-4e85-92b2-73bf7c642adb", // uuid of the team 
  "usersToCreate"?: user[] //array of users to create and enroll in the team
}
```

NOTE:
- Used only to **create new users** and place them in the team
- Users data as defined in the [create users](users.md) page.  
- Presently there is no way to use this endpoint to enroll existing students into the team, and trying to do so **will cause an error**

### Response
A successful request will receive a a response:
```JSON
{

}
```
### Errors

## Edit Team Permissions

### Request

To create a team on ChallengeMe send a `PATCH` request to:
```
PATCH http://35.239.15.221:8080/api/v1/webhook/team/change-permissions/:teamId
```
- teamId = team uuid
With headers as such: 

```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
The request body: (? means optional property)
```JSON
 {
    "usersToBeLeaders": [
        {
            "userName": "royTheKing",
        },
        {
            "userName": "suvelocity",
        }
    ] // array of user names  assign as leaders
}
```

### Response
A successful request will receive a a response:
```JSON
{

}
```
### Errors


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
  "leaders": user[], // array of users that will be defined as the team's teachers and receive teacher privileges
  "usersToCreate"?: user[] //array of users to create and enroll in the team
  "eventsRegistration"?: webhookRegistration[] // array of Webhook registration data to register webhooks for the team
}
```
NOTE:
- Users data as defined in the [create users](registering_users.md) page.  
- Webhook Registration data as defined in the [register Webhooks](webhooks.md) page.  
- The request must contain at least one teacher user. if that user does not exist it will be created.
- The users property is optional, but if you choose to include it use it only to **create new users** and place them in the team
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
    "users": [
        {
            "userName": "royTheKing",
            "permission": "student"
        },
        {
            "userName": "suvelocity",
            "permission": "leader"
        }
    ] // array of user names and the new Permission level ("student"||"leader") to assign them
}
```

### Response
A successful request will receive a a response:
```JSON
{

}
```
### Errors


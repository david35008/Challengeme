---
layout: default
title: Webhooks
parent: API Reference
has_children: false
nav_order: 6
---
# Registering Webhooks
{: .no_toc}
In order to receive updates on events in the ChallengeMe system you have to register a webhook on our system that will send you updates as events happen, to a given address.

## Table Of Contents
{: .no_toc}
- TOC
{:toc}




## General Errors
Status : 401
```JSON 
{
    "message": "you don't have permission for team <teamId>" // you may only access teams for which you have permissions
}
```
## Get All Available Events 
to get a list of all the events you can register to, send a `GET` request to:
```
GET http://35.239.15.221:8080/api/v1/webhooks/events/all
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
### Response
A successful request will receive an array with event names


## Get All Events registered to a Team 
to get a list of all the events you can register to, send a `GET` request to:
```
GET http://35.239.15.221:8080/api/v1/webhooks/events/registered/:teamId
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
### Response
A successful will be an array of objects:
```JSON
[
    {
        "teamId": "77d2ccb6-e6e2-4e85-92b2-73bf7c642adb", 
        "teamName": "teamC",
        "webhookUrl": "http://your_address.com/api/v1/webhook", // url receiving updates
        "authorizationToken": "1234567abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 
        "events": [
            "submittedChallenge",
            "startedChallenge"
        ] // an array of events the webhook listens for
    }
]

```
### Possible Error:
```JSON
{
    "message": "This team are not registered on any event on our system"
}
```
## Registering a Webhook
to register a webhook you must send a `POST` request to:
```
POST http://35.239.15.221:8080/api/v1/webhooks/events/registration/:teamId
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
The request body:
```JSON
{
    "webhookUrl": "http://your_address.com/api/v1/webhook", // webhook address to send events to you on
    "events": ["submittedChallenge", "startedChallenge"],// array of strings, event names to listen for
    "authorizationToken": "1234567abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" // the requesting team's Access token to ChallengeMe

}
```

### Response
A successful request will receive a a response:
Status:201  
```JSON
{
    "message": "Events Registration Success"
}

```

## Update Authorization Token
to update your auth token, send a `PATCH` request to:
```
PATCH http://35.239.15.221:8080/api/v1/webhook/events/authorization/:teamId
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your current webhook token
```
The request body:
```JSON
{
    "webhookUrl": "http://your_address.com/api/v1/webhook", // webhook address used to send events to you on
    "authorizationToken": "1234567abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" // the new token to switch to

}
```

### Response
A successful request will receive a a response:
Status:200
```JSON
{
    "message": "Update Authorization Token Success"
}

```
### Possible Error
Status: 404
```JSON
{
    "message": "Update Authorization Token Fail, There is no webhook url 'http://your_address.com/api/v1/webhook' fot this team"
}
```

## Update Webhook URL
to update the url you want updates sent to, send a `PATCH` request to:
```
PATCH http://35.239.15.221:8080/api/v1/webhooks/events/url/:teamId
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your current webhook token
```
The request body:
```JSON
{
    "oldWebhookUrl": "http://your_address.com/api/v1/webhook",
    "newWebhookUrl": "http://your_address.com/api/v1/webhook", // new webhook address to send events to you on

}
```
### Response
A successful request will receive a a response:
Status:200
```JSON
{
    "message": "Update Url Success"
}

```
### Possible Error
Status:404
```JSON
{
    "message": "Update url Fail, There is no webhook url 'http://your_address.com/api/v1/webhook' fot this team"
}
```


## Logout a Webhook
to logout a Webhook, send a `DELETE` request to:
```
DELETE http://35.239.15.221:8080/api/v1/webhook/events/logout/:teamId
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
The request body:
```JSON
{
    "webhookUrl": "http://your_address.com/api/v1/webhook", // webhook address used to send events to you on
    "events": ["submittedChallenge", "startedChallenge"] // array of strings, event names listened for
}
```

### Response
A successful request will receive a a response:
Status: 200
```JSON
{
  "message": "Logout from submittedChallenge,startedChallenge Events Success"
} // comma delimited list of events you successfully logged out from 

```
### Possible Error
Status: 404
```JSON
{
    "message": "There is no such team with <wrongTeamId> team id"
}
```
Status: 406
```JSON
{
    "message": "You are not registered to these events: 'submittedChallenge,startedChallenge' with the specified webhookUrl" // comma delimited list of events you aren't registered to on the webhookUrl you ave in the request
}
```

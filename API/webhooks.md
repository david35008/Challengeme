---
layout: default
title: Webhooks
parent: API Reference
has_children: false
nav_order: 6
---
# Registering Webhooks
{: .no_toc}
In order to receive updates on events in the ChallengeMe system you have to register a webhook on our system that will send you updates as events happen.

## Table Of Contents
{: .no_toc}
- TOC
{:toc}

## Registering a Webhook
to register a webhook you must send a `POST` request to:
```
POST http://35.239.15.221:8080/api/v1/webhook/events/registration
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
The request body:
```JSON
{
    "teamId": "77d2ccb6-e6e2-4e85-92b2-73bf7c642adb", // team id on ChallengeMe
    "webhookUrl": "http://localhost:8090/api/v1/webhook", // webhook address to send events to you on
    "events": ["submittedChallenge", "startedChallenge"] // array of strings, event names to listen for
    "authorizationToken": "1234567abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" // the requesting team's Access token to ChallengeMe

}
```
## Update Authorization Token
to update your auth token, send a `PATCH` request to:
```
PATCH http://35.239.15.221:8080/api/v1/webhook/events/authorization
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your current webhook token
```
The request body:
```JSON
{
    "webhookUrl": "http://localhost:8090/api/v1/webhook", // webhook address to send events to you on
    "authorizationToken": "1234567abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" // the new token to switch to

}
```
## Remove Webhook
to update the Webhook URL address to be sent updates, send a `DELETE` request to:
```
DELETE http://35.239.15.221:8080/api/v1/webhook/events/logout
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
The request body:
```JSON
{
    "teamId": "77d2ccb6-e6e2-4e85-92b2-73bf7c642adb", // team id on ChallengeMe
    "webhookUrl": "http://localhost:8090/api/v1/webhook", // webhook address used to send events to you on
    "events": ["submittedChallenge", "startedChallenge"] // array of strings, event names listened for
}
```

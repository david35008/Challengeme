---
layout: default
title: Users
parent: API Reference
has_children: false
nav_order: 6
---
# Registering Users
{: .no_toc}  
You can use an http post request to register users on the ChallengeMe system.

## Table Of Contents
{: .no_toc}
- TOC
{:toc}

<!-- ### [single user](#single-user)
- [request](#request)
- [response](#response)
- [Errors](#Errors)
### [multiple users](#multiple-users)
- [request](#request)
- [response](#response)
- [Errors](#Errors) -->

## single user

### Request

To create a user on ChallengeMe send a `POST` request to:
```
POST http://35.239.15.221:8080/api/v1/webhook/create/single-user
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
The request body: (? means optional property)
```JSON
{
  "userName": "david12", // the userName to be used for login.
  "firstName"?: "david", 
  "lastName"?: "diamant",
  "email"?: "david@email.com", // will receive a confirmation message
  "country"?: "israel",
  "city"?: "tel aviv",
  "birthDate"?: "1997/05/07",
  "phoneNumber"?: "0501234567",
  "reasonOfRegistration"?: "challenge my self",
  "githubAccount"?: "davidGit123"
}
```
### Response
A successful request will receive a a response:
```JSON
{

}
```
### Errors

## Multiple Users

### Request

To create a user on ChallengeMe send a `POST` request to:
```
POST http://35.239.15.221:8080/api/v1/webhook/create/multiple-users
```
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
The request body takes an array of single users, properties like [here](#single-user):
```ts
{
  "users": users[] // an array of users, properties like single user
}
```

### Response
A successful request will receive a a response:
```JSON
{

}
```
### Errors

## Update User Permissions

### Request

To create a user on ChallengeMe send a `PATCH` request to:
```
POST http://35.239.15.221:8080/api/v1/webhook/create/change-permission/:userId
```
params: uuid of user to change
With headers as such: 
```JavaScript
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
```
The request body takes an array of single users, properties like [here](#single-user):
```ts
{
  "users": [
        {
            "userName": "royTheKing",
            "permission": "student"
        },
        {
            "userName": "suvelocity",
            "permission": "teacher"
        }
    ] // an array of userNames and the new permissions
}
```

### Response
A successful request will receive a a response:
```JSON
{

}
```
### Errors


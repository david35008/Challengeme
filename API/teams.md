---
layout: default
title: Teams
parent: API Reference 
has_children: false
nav_order: 6
---
# Managing Teams
{: .no_toc}  
You can use an http post request to Create and manage teams (eg. classes) on the ChallengeMe system.  
These teams have users defined as **teachers** that can add other users to the team.

## Table Of Contents
{: .no_toc}
- TOC
{:toc}


## User Data
this is the data used for User registration (? denotes an optional property)
{% highlight JSON %}
{
  "userName": "david12", // the userName to be used for login.
  "email": "david@email.com", 
  "firstName"?: "david", 
  "lastName"?: "diamant",
  "country"?: "israel",
  "city"?: "tel aviv",
  "birthDate"?: "1997/05/07",
  "phoneNumber"?: "0501234567",
  "reasonOfRegistration"?: "challenge my self",
  "githubAccount"?: "davidGit123" //github user name
}
{% endhighlight %}


## General Errors
Status : 401
{% highlight JSON %} 
{
    "message": "you don't have permission for team <teamId>" // you may only access teams for which you have permissions
}
{% endhighlight %}

## Create a Team

To create a team on ChallengeMe send a `POST` request to:
```
POST http://35.239.15.221:8080/api/v1/webhooks/teams
```
With headers as such: 
{% highlight JavaScript %}
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
{% endhighlight %}

The request body: (? means optional property)
{% highlight JSON %}
{
  "teamName": "crm", // name of the team
  "leaders": [
    { "userName":"roy"},
    { "userName":"tzach"}
  ], // array of objects with userNames that will be defined as the team's leaders and receive leader privileges
  "usersToCreate"?: user[] //array of users to create and enroll in the team
  "eventsRegistration"?: webhookRegistration //  Webhook registration data to register a webhook for the team
}
{% endhighlight %}
NOTE:
- Users data as defined in [here](#user-Data) page.  
- Webhook Registration data as defined in the [Webhooks](webhooks.md) page.  
- The request must contain at least one leader user. if that user does not exist it must be included in `usersToCreate` with a property `leader:true`.
- The `usersToCreate` property is optional, but if you choose to include it use it only to **create new users** and place them in the team
- Presently you <span style='color:red'>can't</span> to use this endpoint to enroll existing students into the team, and trying to do so **will cause an error**


### Response
A successful request will receive one of these responses:
{% highlight JSON %}
{
    "message": "Create crm12 Team Success",
    "leaders": [
        {
            "userName": "roman"
        },
        {
            "userName": "dana"
        }
    ],
    "teamId": "96f33b50-5c5a-4782-a5af-53a23bd04016"
}
// with events registered 
{
    "message": "Create crm12 Team Success",
    "leaders": [
        {
            "userName": "romy"
        },
        {
            "userName": "dana"
        }
    ],
    "teamId": "23df158d-6b3d-4b91-9bff-62cf2cce4a2b",
    "eventRegistrationStatus":201,
    "eventRegistrationMessage": "Events Registration Success"
}
// with new users
{
    "message": "Create crm12 Team With 2 New Users Success",
    "leaders": [
        {
            "userName": "roman"
        },
        {
            "userName": "dana"
        }
    ],
    "teamId": "1946579b-d115-421e-bc2d-aada23be047c",
    "newUsers": [
        {
            "userName": "roman",
            "password": "h4uneEYG"
        },
        {
            "userName": "yoram",
            "password": "i6GCeim4"
        }
    ]
}
// with new users and event registration
{
    "message": "Create crm12 Team With 2 New Users Success",
    "leaders": [
        {
            "userName": "roy"
        },
        {
            "userName": "dana"
        }
    ],
    "teamId": "08e1c0a1-368f-4f98-a67c-aceac1d6c902",
    "newUsers": [
        {
            "userName": "dana",
            "password": "ABNvWeUg"
        },
        {
            "userName": "yona",
            "password": "A4Ci7BhZ"
        }
    ],
    "eventRegistrationStatus":201,
    "eventRegistrationMessage": "Events Registration Success"
}
{% endhighlight %}

### Possible Errors
Status : 409
{% highlight JSON %}
// some of the Users you are trying to create already exist in the system
{
    "message": "There are usernames that already exists",
    "userNamesTakenAlready": [
        "dan",
        "yon"
    ]
}
{% endhighlight %}
  

Status : 404
{% highlight JSON %}
// bad teamId
{
    "message": "There is no such team with 77d2ccb6-e6e2-4e85-92b2-73bf7c642ada team id"
}
// UserNames not recognized in the system
{
    "message": "romy,billie,harry do not Exist In The System, Please Add Them Inside 'usersToCreate' Array "
} // Comma delimited list of users not found on the system 
// Request missing Leaders
{
    "success": false,
    "message": "\"leaders\" must contain at least 1 items"
}
{% endhighlight %}

These Next two responses have a catch:
Note The 207 status- the **Team** was registered, but the events registration failed. in this case you will have to try and register these events on the the [events endpoints](webhooks.md).    
These responses will have an
    "eventRegistrationStatus":404,


Status: 207
{% highlight JSON %}
{
    "message": "Create crm12 Team Success",
    "leaders": [
        {
            "userName": "romy"
        },
        {
            "userName": "dana"
        }
    ],
    "teamId": "45e0eca8-0201-4a21-ae5e-c90a35e2cc61",
    "eventRegistrationStatus":404,
    "eventRegistrationMessage": "There is no such events"
}
// With newUsers
{
    "message": "Create crm12 Team With 2 New Users Success",
    "leaders": [
        {
            "userName": "romy"
        },
        {
            "userName": "dana"
        }
    ],
    "teamId": "3dd674cb-7f54-47f8-8da2-9f0a2a265e24",
    "newUsers": [
        {
            "userName": "romy",
            "password": "PYK68PXr"
        },
        {
            "userName": "yoni",
            "password": "buIUjWbD"
        }
    ],
    "eventRegistrationStatus":404,
    "eventRegistrationMessage": "There is no such events"
}
{% endhighlight %}
## Add Users to a Team

To add users to a team on ChallengeMe send a `POST` request to:
```
POST http://35.239.15.221:8080/api/v1/webhooks/teams/add-users/:userId
```
- teamId on the requesting platform
With headers as such: 
{% highlight JavaScript %}
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
{% endhighlight %}


The request body: (? means optional property)
{% highlight JSON %}
{
  "usersToCreate"?: user[] //array of users to create and enroll in the team
}
{% endhighlight %}


NOTE:
- Used only to **create new users** and place them in the team
- Users data as defined in the [create users](#user-data) page.  
- Presently there is no way to use this endpoint to enroll existing students into the team, and trying to do so **will cause an error**

### Response
A successful request will receive a a response:
Status:201
{% highlight JSON %}
{
  "message":"Add 12 users to MyTeam team Success",
  "leaders":["Wendy","Peter"], // array of leader users added
  "newUsers":[
    {
    "userName":"wendy",
    "password":"dasewad23"
    },
    {
    "userName":"peter",
    "password":"opmgaw32h"
    },
    {
    "userName":"john",
    "password":"w1wew1p9"
    },
    {
    "userName":"michael",
    "password":"adnw43a4"
    }

  ] // array of the new users and their temporary passwords (leaders included)

}
{% endhighlight %}
### Errors
Status : 404
{% highlight JSON %}
// some of the Users you are trying to create already exist in the system
{
    "message": "There is no such team with <wrongTeamId> team id"
}
{% endhighlight %}


## Edit Team Permissions

To create a team on ChallengeMe send a `PATCH` request to:
```
PATCH http://35.239.15.221:8080/api/v1/webhooks/teams/change-permissions/:teamId
```
- teamId = team uuid

With headers as such: 

{% highlight javascript %}

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp // the word "Bearer" followed by your webhook token
{% endhighlight %}


The request body: (? means optional property)
{% highlight JSON %}
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
{% endhighlight %}


### Response
A successful request will receive a a response:
{% highlight JSON %}
{
    "message": "Update 2 Users Permission"
}
{% endhighlight %}


### Possible Errors
A username you are trying to promote is not on the team
{% highlight JSON %}
{
    "message": "<username> Are not exist on this team, Please check the 'usersToBeLeaders' list that will contain only team members"
}
{% endhighlight %}

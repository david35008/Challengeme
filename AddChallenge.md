# Adding a Challenge to ChallengeMe!

# Stack

we will need to be synchronized

## **Proposed Challenges Page**

interactive form to propose challenge which will contain
**From User:**

1.  Name - will be displayed ()
2.  image - shahar
3.  labels - React Select -
4.  Description - (max of 120 words)
5.  type - React Select (link to instruction)[
    client-only,
    fullstack-mysql ,
    fullStack,
    server-only,
    server-mysql]
6.  repositoryName - the source repo which contains the tests
7.  boilerPlate - the boilerPlate repo.
8.  solution? - if we want to add CI

**From Client Code:**

9.  authorId

**Backend props**

10. CreatedAt
11. ProposedAt: Date - (native sequelize CreatedAt)
12. DeletedAt: Date- (paranoid)
13. ApprovedAt :Date - ()
14. State: enum [pending, denied , approved]
15. ApprovedBy : number (must be admin ID)
16. UpdatedAt : Date(native sequelize Date) , will be desplayed at the client as "added at"

---

    /api/v1/challenge/propose POST Premisios: any registered user
     // add the challenge to the challenge table with all props above

---

    /api/v1/challenges/propose GET Premisios: Admin,Teacher
    //get all proposed challenges

## Teacher/Admin get Premissioned Routes

- **add challenge container**
  will have router to all other sub-pages
  will expose route by premmisions
  button - my proposal
  button - my challenges
  button - Admin - pending proposals
  button - add challenge
- **Proposed Challenges Page**
  will fetch all my propose /api/v1/challenges/proposed/:authorId GET (checkToken)
  if admin -will fetch and render /api/v1/challenges/proposed GET
  when clicking on certain challenge will land another Proposed Challenge Page
- **Proposed Challenge Page**
  will display all data about the specific proposal
  Admin-will have approve button which will take the challenge and update his enum state to approve
  Admin-will have decline button which will update the enum to declined
  will have dialog section exposed to all admin and only the author with comments
  User - will see it as an open form with realTime validation
  User - cancel request
  Optional - CI status, need to add solutionRepo

## Preps

1.  Shnitzer - backend
2.  Tsach - Form and Pages
3.  Kahlon , figma design and after tsach finsihes Client functionallity add css and responsiveness, and Animation... **Make it look awesome**

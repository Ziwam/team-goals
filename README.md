# Team Goals
This is an application that allows users to view and create a thread of goals set and completed by other users. Goals are displayed with the tagged user who posted or completed it. Users must sign up in order to gain access to this community thread. This app uses Firebase for authentication and as a database to store group goals and list of users.
## Table of Contents
- [Demo](#demo)
- [Implementation](#implementation)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [License](#license)
## Demo
![team goals](https://lh3.googleusercontent.com/ZbDq7VZ_lj34G7OREP2Hfm4Uu9_0EfOusAxW5G4BzSd3l7UvvD9_1o3ejqeBWfSXlfYmN9vnLleVipYOnT1-6ii7PeoqxpNcwzOlvGVE2OevI6tnTKj9zeDM37YI1fTCS9FR7xJbeMeTFMMYt8TxqCYYjKREXedLOHisber6uCWnxuTYZz3dRJoheextojKr8Rf32xX-2Jv4_Jm4NWXzpQ0aqjaX2sMb8xTx4e8Kj9oOAFLumYqHWhvrycS6zxleJXncML-_Iom8TcEmPYQ_gmSBr4m7VCTLMJ25mfcYIuU1pAljABBpgS8vux7r_dfUdUFrqchKmQXyvZxkVda4HooWarPM4QFAsXEVu86czqUsQlInHIhNQzgrSigI3Ark5AvxiWdAuvWDqlKRofIMwJdP1903iUWCZm7e6egX0MhxkNl56FzmHX7V07-gCCXYHli2Fo3VT3C9miD6EJ3BLW6zw1tOde8p6WlH97wml7BuCtx66iZNhYMmbAsl3tfZ1jLlrPMLH4C8fxW8ttv5xEn7GMSRSieZYAq0HPeroYoDuQT_t_n3kOb4M0Hdu0n1a2CKZSOxnfA93-acNlLICRTxeQPAklcZIBMdSwU=w1024-h900-no)
The app is currently live: https://tg-zm.herokuapp.com/ 
## Implementation
To clone this repository you need [Git](https://git-scm.com/), [Node](https://nodejs.org/) and Node’s package manager ([npm](https://www.npmjs.com/)) installed on your computer.
### Dependencies
```
“dependencies”: {
    “express”: “^4.16.3”,
    “firebase”: “^4.13.1”,
    “node-sass-chokidar”: “^1.3.0”,
    “npm-run-all”: “^4.1.3”,
    “react”: “^16.3.2”,
    “react-dom”: “^16.3.2”,
    “react-redux”: “^5.0.7”,
    “react-router”: “^3.2.1”,
    “react-scripts”: “1.1.4”,
    “redux”: “^4.0.0”
},
```
### Installation
```bash
# clone the repo
$ git clone https://github.com/Ziwam/team-goals.git

# go into the repo
$ cd team-goals

# install the dependencies
$ npm install

# start the app
$ npm run start-css
```
## Deployment
Create a development-ready build be running.
```bash
$ npm run build
```
A folder called build will appear in the root of the project. If you wish to change the folder’s name, modify the path in the **server.js** file to whichever life name you have that contains your build.
## Technologies
This project includes:
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sass](https://sass-lang.com/)
- [Firebase](https://firebase.google.com/)
## License
(MIT License)
The MIT License (MIT) Copyright (c) 2018 Ziwa Mukungu zmukungu@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
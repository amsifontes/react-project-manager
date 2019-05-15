# react-project-manager

gantt_v1.js -> Pseudocode for MVP

[Wireframe mockup](https://docs.google.com/drawings/d/1ik6u2L2tU6HjCKC-xj1W3ZgOB8zJdJtN8cRIfeixH30/edit?usp=sharing) in google drawings.

Resizeable components framework: https://github.com/STRML/react-resizable

Drag-and-drop framework: https://github.com/atlassian/react-beautiful-dnd

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



From Michael's README:

MERN Prototyping Starter
This is an example start project for Kickstart Coding MERN MVP projects.

DO NOT use this project in production. It exposes an API to MongoDB without any sort of security. The only purpose of the API is to allow rapid front-end prototyping without much (or any) backend modifications.

Usage
Set-up
Get the code. You can either download this repo as a tar.gz or zip file, then extract, do a git pull and copy over the files into your project, or fork this project.

Set-up your MongoDB database. Either set-up an mLab.com database for testing purposes with your team (easiest), or install and configure a local DB.

Create a ".env.local" file, that contains your credentials.

This file WILL NOT go into your git repo (because it is in .gitignore). If you will be using the supplied run.sh, it should be in the following format:
export MONGODB_URI='mongodb://USERNAME:PASSWORD@something.com:1234/DB_NAME'
Where USERNAME and PASSWORD is replaced with an actual username and password on the MongoDB. In the case of mLab, you will have to create a username and password as a separate step.
NPM install backend:

npm install
NPM install frontend:
cd client
npm install
Running
For local development, use the included "run.sh" Bash script:

bash run.sh
Look inside the script. Can you understand what it is doing? It's main goal is just to save you the steps of opening up two terminal windows or tabs. You can, however, still do that method, it's up to you.

Heroku
If you want to use your mLabs database on Heroku, you will need

heroku config:set MONGODB_URI='mongodb://someUser:...'
To ensure Heroku has the right configuration values set (which should occur after you have done heroku create to make a new Heroku app, and added an mLabs add-on to allow MonogoDB on Heroku), do a command like the following:

heroku config
You should see MONGODB_URI specified, something like:

MONGODB_URI  mongodb://someUser:somePassword@something.com:1234/someDatabaseName 
Launching to Heroku is like any other app:

git push heroku master
Securing the backend
After the prototype is built, the backend can be incrementally secured by creating custom routes that do the logic required for your application, and delete each generic / insecure route. For example, instead of allowing deletion of ANY documents, it could only allow queries in a certain format to only delete from a certain collection, relevant to your application. Also, you may consider using an authentication framework for Express.js, such as Passport.

Once you replace a given insecure route, and make the front-end use the new route, you can delete the old route.

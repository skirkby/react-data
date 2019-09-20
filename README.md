# Composing React Components and Passing Data Via Props

This guide gives steps for being able to edit existing React apps, or create new ones, on a local machine, using VSCode to edit. Following this method will enable you to launch an auto-reloading instance of the app in a web page, so you can see your changes in realtime (when you save modified code files).

TLDR;

## to run this project and edit it with VSCode:

- make sure you have node and npm installed. Optionally, install yarn. (I like yarn. I recommend yarn.)
    - See https://www.npmjs.com/get-npm
    - See https://yarnpkg.com/lang/en/docs/install
- download this repo and unzip it.
- cd to the repo dir and execute ```yarn```
    - if you didn't install yarn, you can type ```npm install```
    - these commands will download the dependencies listed in package.json
- type ```code .```
    - this will open VSCode - you can edit the project files.
- type ```yarn start``` or ```npm start``` to start the application
    - yarn and npm will execute the "start" script defined in the package.json file
        - the "start" script executes "react-scripts start", which transpiles and packages your app, then launches it in a browser window
    - A new browser window will open pointing to localhost:3000
    - the app will take a few seconds to transpile - you may have to refresh the browser window manually a few times, initially
    - after the app finally loads, every time you save a source file, the app will reload in the browser window
  

## to create a new React project:

- make sure you have node and npm installed. Optionally, install yarn. (I like yarn. I recommend yarn.)
    - See https://www.npmjs.com/get-npm
    - See https://yarnpkg.com/lang/en/docs/install
- install the create-react-app npm package
    - with yarn: ```yarn global add create-react-app```
    - with npm: ```npm install -g create-react-app```
- cd to the parent directory for your project
- type ```create-react-app <directory_name>```
    - this will create your directory and create a basic React application
    - it takes a while (minutes) to download all of the dependencies (you need an active Internet connection)
    - Alternative yarn command: ```yarn create react-app <directory_name>```
    - Alternative npm command: ```npm create react-app <directory_name>```
- cd to <directory_name>
- type ```code .``` to start editing
- type ```yarn start``` or ```npm start``` to launch the app, as above.


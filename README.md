# Composing React Components and Passing Data Via Props

This project can be downloaded and executed in a terminal, and edited using your favorite editor (such as VSCode).

This project was created using codesandbox.io, and downloaded. But basically, it was created using the create-react-app module. This means that it has react-scripts already set up and configured.

## react-scripts module

react-scripts is a packaging, launching, and monitoring module for dev environments. It is automatically installed when you use create-react-app to create a starter React application.

Look at package.json (in the root) at the "scripts:" property, and you will see the following:

```js
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
```

These are script names used by react-scripts (start, build, test, eject). If you use create-react-app to set up a starter React application, which you can then edit, it will install react-scripts in the ./node_modules directory in your project directory.

  - "start" is used to start running your application.
  - "build" will transpile and package your application, which can then be deployed to a web server without needing to set up a transpiler on the server.
  - "test" will run unit tests and other tests you define for your application (a subject for another day).
  - "eject" will basically reconfigure your package.json file, unhiding all of the configuration nonsense that create-react-app has hidden. It makes package.json extremely verbose, but also gives you more control over execution, building, and deploy settings.

Since react-scripts is installed "locally" and not "globally", if you want to run it directly, you have to run it through the "npx" utility.

For example:

    npx react-scripts start
    
This will cause react-scripts to "build" your application (by running it through the Babel transpiler, converting all of the JSX into vanilla JavaScript, and also "packaging" your app using the WebPack module), and it will also start an HTTP server on localhost:3000 (by default), and open a browser window pointing to that server.

In my experience, you have to refresh the page to get the app to load, after react-scripts finishes transpiling and packaging the app.

react-scripts then monitors all of your source files, and anytime a file is modified *and saved*, it will reload the browser window, so you get a hot view of your app with every save.

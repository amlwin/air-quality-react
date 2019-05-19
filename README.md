# Air Quality PWA

This is a Progressive Web-app  in which people can check air pollution index and weather.

## Current feature

 1. Can find current location with GPS, without manually add  by typing  country, state and city.
 2. Can find country, state and city by manually 
 3. Handle the no network connection state.

## Need to be improved

 - we can make auto complete with available city and state on input text, by make network request at the start of the app.

## Prerequisites
Node version should be 10

## Api
The app's api is base on [AirVisual](https://www.airvisual.com/). I'm using **community api** , there is limited request per day. When request count is reached maximum, please create account and get a `apk_key` on [AirVisual](https://www.airvisual.com/). And replace it on `api_key` where `src/api/AqiAp.js`.

## Dependencies

- axios: promise based HTTP client for the browser and node.js

- formik: state based form management for react.

- antd :  Ant-Design for beautiful components and layout

- styled-components: to create reusable components with dynamic class styling

## Available Scripts
And go the project directory and install required dependencies by

    npm install i
 you can run:

  

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

  

### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

  

### Analyzing the Bundle Size

  

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

  

### Making a Progressive Web App

  

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

  

### Advanced Configuration

  

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

  

### Deployment

  

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

  

### `npm run build` fails to minify

  

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
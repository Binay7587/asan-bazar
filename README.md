# Learning Mern Stack Frontend

## Introduction
Reactjs => Client side render (CSR)
Nextjs => Server side render (SSR) => SEO friendly

## Directory Structure

```bash
├── node_modules
├── public
│   ├── favicon.ico
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
├── src
│   ├── pages
│   ├──   ├── home
│   ├──   │    ├── Home.js
│   ├──   │    └── Home.module.css
│   ├──   ├── login
│   ├──   │    ├── Login.js
│   ├──   │    └── Login.module.css
│   ├──   ├── register
│   ├──   │    ├── Register.js
│   ├──   │    └── Register.module.css
│   ├──   └── layout
│   ├──        ├── Layout.js
│   ├──        └── Layout.module.css
│   ├── components
│   ├──       ├── Button
│   ├──       │      ├── Button.js
│   ├──       │      └── Button.module.css
│   ├──       ├── Card
│   ├──              ├── Card.js
│   ├──              └── Card.module.css
│   ├── services
│   ├──       ├── to call api
│   ├── config
│   ├──       ├── to store config
│   ├── assets
│   ├──       ├── to store css/js/images
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

## Components
    - an UI block element that can be reused
    - There are two types of components
        - Stateful / Class Component
        - Stateless / Functional Component

## State V/S Props
### State
    - are the internal data of a component
    - can be changed/manipulated
    - State can be changed by the component itself and is present only in class components
### Props
    - are the incoming data to a component
    - readonly only
    - Props can be passed from one component to another 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

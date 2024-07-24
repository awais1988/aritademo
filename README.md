# Getting Started

## Project Structure:

On root folder we have:

###### node_modules

###### public

###### src

###### .env file

###### package.json file

###### jest.config.js file

### src is our important folder, it contain many other folders and files.

#### components

Its our component folder, every custom component that we'll create will be here. Currently here is only two component 'LeftMuenu' and 'UserInfo' that we are using for Left Sidebar.

### config

In this folder we have two files.
apiConfig: I used this file for save api endpoints. So it is easy to check all api endpoints in one file.
axiosConfig: I'm using axios for api calls, so I created interceptor in this file to handle api response.

### store

In store folder I create subfolder according to views. And in each folder I usally add 3 files (Actions, Reducers, Api) but in this project we are not using redux that's why only one file is here for now.
In that file we call the api and returns the response to components.

### tests

Then we have test folder, In this folder I added a test files.

### utils

In this folder I added an images folder to contain static images that we'll use in application.
We can add styles and other important files here as well.

### views

In this folder I created pages here that we'll use in routes.

## Available Scripts

In the project directory, you can run:

### `yarn`

It will install your packages that we are using in this application.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

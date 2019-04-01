# mimaflow player

The mimaflow player is a simplified player for Spotify songs. It lets the user search for an artist, track or album and displays the first 20 results. The user has also the possibility to reproduce a 30s preview of each song by clicking on the play button.

## Configuration

The application runs against the Spotify API so, in order to make it run, you need to configure the access to the API for both the application and e2e tests.

## App configuration

You must provide the [OAuth2 client Id of your Spotify App](https://developer.spotify.com/documentation/web-api/quick-start/) in the variable `REACT_APP_OAUTH_CLIENT_ID` declared in the `.env.development` file. Optionally, you can change the value of the `REACT_APP_OAUTH_REDIRECT_URI` with the url where your application is running. 

## Running the application

To run just execute the following command to install all the required dependencies:

```bash
$ yarn install
```

And then just run the following command to start the application:

```bash
$ yarn start
```

You can also run the tests by executing:

```bash
$ yarn test
```

## e2e tests

### e2e configuration

You must provide your credentials for [OAuth2 client_credentials flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow), as `client_id:client_secret` in Base64 format in the variable `REACT_APP_OAUTH_CLIENT_CREDENTIALS` declared in the `cypress.json` file.

### Running e2e tests

```bash
$ yarn run cypress open
```

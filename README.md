# mimaflow player

The mimaflow player is a simplified player for Spotify songs. It lets the user search for an artist, track or album and displays the first 20 results. The user has also the possibility to reproduce a 30s preview of each song by clicking on the play button.

**This is an enhanced version that integrates the process of getting the OAuth2 token without copy&paste**

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

## Title component

This is an example of how _props_ work. Component _props_ are readonly, their value can be set only in a parent component but they can never be modified in a child.

## CurrentDateTime component

This is an example of why there are class components besides functional components. Class components are required when we need to keep a state and we need to interact with the lifecycle of the component: when it is mounted, unmounted, constructed...

### state

As the opposite of _props_, the _state_ can only be modified by the component itself. It is owned by the component and no other component can modify a component's state but itself. The difference between _props_ and _state_ is that whenever the _state_ changes, the component re-renders itself.
Sometimes _props_ passed to the component end up being part of the _state_ of a component. And sometimes _state_ is passed as _props_ to children components.

#### Get state

The _state_ is a private property of the component, as said. You can access the _state_ as you can access _props_: `this.state.mystateproperty`.

#### Set state

However, you can only set the _state_ **directly** in the constructor. Afterwards, if you want to force the re-render of your component when your _state_ changes, you must use the method `setState`;

### lifecycle

Class components have some methods that can be overridden:

- render: method that is called everytime the component is rendered. Here is where we put our JSX code
- constructor: it constructs the component. It only has one argument: _props_. This is where you can define your _state_ for the first time. (Not really a lifecycle method but it is the first time to run, though).
- componentDidMount: it is called when the component is rendered in the page.
- componentWillUnmount: it is called when the component is removed from the page.

## SearchBar component

This component is a perfect example of event handling, make requests to a backend and lifting the state up.
This component will render an input text and a button. This is the first component where there is user interaction. The user will write the name of a song, band or album in the input text and once he/she clicks on the _Search_ button, it will make a request to the Spotify API to search by the user input.

### onChange event

First, it's necessary to store what the user types into the input text. As we mentioned before, _props_ cannot be modify so the `searchTerm` provided by the user should be stored in the component's state. So every time the user **changes** the value of the input, the state of the component is updated, storing the input value. This is exactly what the function `handleChange` does. 

### onClick event

On the other hand, we also need to handle the click event on the search button, so we can trigger the request to the backend. In this case, we call the function `handleClick` to perform the request to the backend to retrieve the list of tracks matching with the `searchTerm`. 

### lift the state up

So, once the request returns with the list of tracks, what should be done with them? The SearchBar component does not handle the display of the results, that should be done in another component. But neither the props or the state can be shared with other components. That means the state must to be lifted up, so a parent component must take care of the request and the list of tracks, not the SearchBar.

## Player component

This component is just a wrapper for the SearchBar component and the component that will display the results from the search. 

The content of the function `handleClick` from the SearchBar component should be placed in this new component and the SearchBar component will call to the function on the parent when the user clicks on the search button. This can be easily achieved via _props_.
This way, the Player component will fetch the tracks and will pass them to the component taking care of the tracks display.

## Tracklist component

Another example of lifting the state up. The list of tracks allow to play a preview of 30secs but we must not allow to play multiple songs at once, so there is a need to control which of the tracks is playing so once the user plays another one, the other stops. This cannot be managed from the Track component as it has no knowledge of the other tracks. 

## Track component

This is an example of conditional rendering, as the icon next to the song depends wethere it is being played or not.

# Bonus

1. Props validation with `PropTypes`.
2. Using `Refs`.
3. Modify Player to add an option to control the size of the results.
4. Add a button to clear the results.
5. Zoom the thumbnail on hover.
6. Integrate Spotify token in app.

# Resources

This is the Spotify API endpoint we are going to use:

[https://developer.spotify.com/console/get-search-item/]


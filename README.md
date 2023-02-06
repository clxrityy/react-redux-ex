# REACT REDUX EXAMPLES

```none
.
├── public
├── src
├────└── actions // Functions for changing the state
├────└── assets
├────└── components
├────└── layout
├────└── pages
├────└── reducers // Switch statements that alter the state
├────└── [...]
└── [...]
```

##### `./src/actions/index.js`
Individual functions for each change of state. Define the type and payload.
> This is the function you will call within a component to change the state.

```js
export const increment = (payload = 1) => {
    return {
        type: 'INCREMENT',
        payload: payload
    };
};

// ...
```

##### `./src/reducers/counter.js`
The reducer that defines how the state changes by the type of action.
> In this example we are altering a numerical state by the *type* of action as specified in the example above. You'll see the state is set as a default of 0.

```js
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        default:
            return state;
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        case 'RESET':
            return state;
    };
};

export default counterReducer;
```

##### `./src/reducers/index.js`
Organize/combine all of the reducers to manage their own slice of state.
> In this example, *"counter"* is what this slice of state will be referred to as. See the next example for how it's called and used.

```js
import counterReducer from "./counter";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    counter: counterReducer,
    // ...
});
```

###### `./src/pages/Count.js`
Import `useSelector` & `useDispatch` from `react-redux` and begin calling the actions to change the state within the application.
> In this example, I'm using buttons with `onClick()` to increase the increment.

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

const Count = () => {

    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    return (
        //...
        <button
            onClick={() => dispatch(increment())}
            >
            + 1
        </button>
    );
};
export default Count;

```
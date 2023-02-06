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
    }
};

export default counterReducer;
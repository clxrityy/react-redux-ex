const loggedReducer = (state = false, action) => {
    switch (action.type) {
        default:
            return state;
        case 'SIGN_IN':
            return !state;
    }
};

export default loggedReducer;
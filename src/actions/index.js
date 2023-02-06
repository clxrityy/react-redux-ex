// PAYLOAD = 1 meaning the default increment is 1, but if a parameter is specified, the payload can be anything
export const increment = (payload = 1) => {
    return {
        type: 'INCREMENT',
        payload: payload
    };
};

export const decrement = (payload = 1) => {
    return {
        type: 'DECREMENT',
        payload: payload
    };
};

// SIGN IN
export const signIn = () => {
    return {
        type: 'SIGN_IN'
    };
};

// COLORS

export const colorRed = () => {
    return {
        type: 'RED'
    };
};

export const colorOrange = () => {
    return {
        type: 'ORANGE'
    };
};

export const colorYellow = () => {
    return {
        type: 'YELLOW'
    };
};

export const colorGreen = () => {
    return {
        type: 'GREEN'
    };
};

export const colorBlue = () => {
    return {
        type: 'BLUE'
    };
};

export const colorPurple = () => {
    return {
        type: 'PURPLE'
    };
};
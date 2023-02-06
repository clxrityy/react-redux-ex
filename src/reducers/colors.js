export const colorChange = (state = '', action) => {
    switch (action.type) {
        default:
            return state;
        case 'RED':
            return state = 'RED';
        case 'ORANGE':
            return state = 'ORANGE';
        case 'YELLOW':
            return state = 'YELLOW';
        case 'GREEN':
            return state = 'GREEN';
        case 'BLUE':
            return state = 'BLUE';
        case 'PURPLE':
            return state = 'PURPLE';
    }
};
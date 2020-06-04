export const INC_COUNTER = 'INC_COUNTER';
export const MAKE_RANDOM_INDEX = 'MAKE_RANDOM_INDEX';


const initialState = {
    counter: 0,
    items: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    randomIndex: 3,
    speed: 1000
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER:
            return {
                ...state,
                counter: action.counter +1
            }
        case MAKE_RANDOM_INDEX:
            return {
                ...state,
                randomIndex: action.randomIndex
            }
        default:
            return state;

    }
}

export const incCounterAC = (counter) => ({type: INC_COUNTER, counter})
export const makeRandomIndexAC = (randomIndex) => ({type: MAKE_RANDOM_INDEX, randomIndex})
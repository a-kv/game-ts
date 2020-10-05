export const INC_COUNTER = 'INC_COUNTER';
export const MAKE_RANDOM_INDEX = 'MAKE_RANDOM_INDEX';
export const CHANGE_SPEED = 'CHANGE_SPEED';


export type State = {
    counter: number,
    items: number[],
    randomIndex: number,
    speed: number
}

const initialState: State = {
    counter: 0,
    items: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    randomIndex: 3,
    speed: 1000
}

type ActionTypes = IncCounterType | MakeRandomIndexType | ChangeSpeedType

export const reducer = (state = initialState, action: ActionTypes) => { //??
    switch (action.type) {
        case INC_COUNTER:
            return {
                ...state,
                counter: action.counter + 1
            }
        case MAKE_RANDOM_INDEX:
            return {
                ...state,
                randomIndex: action.randomIndex
            }
        case CHANGE_SPEED:
            return {
                ...state,
                speed: action.speed
            }
        default:
            return state;

    }
}

export type IncCounterType = {
    type: typeof INC_COUNTER
    counter: number
}
export const incCounterAC = (counter: number): IncCounterType => ({type: INC_COUNTER, counter})
export type MakeRandomIndexType = {
    type: typeof MAKE_RANDOM_INDEX
    randomIndex: number
}
export const makeRandomIndexAC = (randomIndex: number): MakeRandomIndexType => ({type: MAKE_RANDOM_INDEX, randomIndex})

export type ChangeSpeedType = {
    type: typeof CHANGE_SPEED
    speed: number
}
export const changeSpeedAC = (speed: number): ChangeSpeedType => ({type: CHANGE_SPEED, speed})
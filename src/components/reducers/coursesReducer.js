import { ADD_COURSE } from "../actions/actions";

export function courses(state = [], action) {
    switch (action.type){
        case ADD_COURSE:
            return [...state, action.course];
        default:
            return state;
    }
}
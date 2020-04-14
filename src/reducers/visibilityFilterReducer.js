import { VisibilityFilters, VisibilityFilterActions } from "../constants/TodoConstant";


const visibilityFilterReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case VisibilityFilterActions.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilterReducer;
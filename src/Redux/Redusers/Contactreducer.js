import * as types from "../Types"

export const contactUsReducer = (state = {}, action) => {
    switch(action.type){
        case types.CONTACT_US_REQUEST:
            return {loading: true}
        case types.CONTACT_US_SUCCESS:
            return {loading: false, mailDetail:action.payload}
        case types.CONTACT_US_FAIL:
            return {loading: false, error: action.payload}
        case types.CONTACT_US_RESET:
            return {}
        default:
            return state
    }
}

export const postSubReducer = (state = {}, action) => {
    switch(action.type){
        case types.POST_SUB_REQUEST:
            return {loading: true}
        case types.POST_SUB_SUCCESS:
            return {loading: false, subDetail:action.payload}
        case types.POST_SUB_FAIL:
            return {loading: false, error: action.payload}
        case types.POST_SUB_RESET:
            return {}
        default:
            return state
    }
}
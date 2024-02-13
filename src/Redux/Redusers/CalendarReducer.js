import * as types from "../Types"


export const getAllSessionReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_SESSION_REQUEST:
			return { loading: true }
		case types.GET_ALL_SESSION_SUCCESS:
			return { loading: false, allsession: action.payload }
		case types.GET_ALL_SESSION_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_SESSION_RESET:
            return {}
		default:
			return state
	}
}

export const getSTEReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_STE_REQUEST:
			return { loading: true }
		case types.GET_STE_SUCCESS:
			return { loading: false, ste: action.payload }
		case types.GET_STE_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_STE_RESET:
            return {}
		default:
			return state
	}
}

export const postSessionReducer = (state = {}, action) => {
	switch (action.type) {
		case types.POST_SESSION_REQUEST:
			return { loading: true }
		case types.POST_SESSION_SUCCESS:
			return { loading: false, sessionDetail: action.payload }
		case types.POST_SESSION_FAIL:
			return { loading: false, error: action.payload }
		case types.POST_SESSION_RESET:
			return {}
		default:
			return state
	}
}

export const postTermReducer = (state = {}, action) => {
	switch (action.type) {
		case types.POST_TERM_REQUEST:
			return { loading: true }
		case types.POST_TERM_SUCCESS:
			return { loading: false, termDetail: action.payload }
		case types.POST_TERM_FAIL:
			return { loading: false, error: action.payload }
		case types.POST_TERM_RESET:
			return {}
		default:
			return state
	}
}

export const postEventReducer = (state = {}, action) => {
	switch (action.type) {
		case types.POST_EVENT_REQUEST:
			return { loading: true }
		case types.POST_EVENT_SUCCESS:
			return { loading: false, eventDetail: action.payload }
		case types.POST_EVENT_FAIL:
			return { loading: false, error: action.payload }
		case types.POST_EVENT_RESET:
			return {}
		default:
			return state
	}
}

export const searchCalendarReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SEARCH_CALENDAR_REQUEST:
			return { loading: true }
		case types.SEARCH_CALENDAR_SUCCESS:
			return { loading: false, searched: action.payload }
		case types.SEARCH_CALENDAR_FAIL:
			return { loading: false, error: action.payload }
        case types.SEARCH_CALENDAR_RESET:
            return {}
		default:
			return state
	}
}

export const getMainCalendarReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_MAIN_CALENDAR_REQUEST:
			return { loading: true }
		case types.GET_MAIN_CALENDAR_SUCCESS:
			return { loading: false, calendar: action.payload }
		case types.GET_MAIN_CALENDAR_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_MAIN_CALENDAR_RESET:
            return {}
		default:
			return state
	}
}

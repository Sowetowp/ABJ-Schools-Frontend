import * as types from "../Types"

export const postNewsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.POST_NEWS_REQUEST:
			return { loading: true }
		case types.POST_NEWS_SUCCESS:
			return { loading: false, newsDetail: action.payload }
		case types.POST_NEWS_FAIL:
			return { loading: false, error: action.payload }
		case types.POST_NEWS_RESET:
			return {}
		default:
			return state
	}
}

export const getAllNewsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_NEWS_REQUEST:
			return { loading: true }
		case types.GET_ALL_NEWS_SUCCESS:
			return { loading: false, news: action.payload }
		case types.GET_ALL_NEWS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_NEWS_RESET:
            return {}
		default:
			return state
	}
}

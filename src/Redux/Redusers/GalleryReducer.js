import * as types from "../Types"

export const postImageReducer = (state = {}, action) => {
	switch (action.type) {
		case types.POST_IMAGE_REQUEST:
			return { loading: true }
		case types.POST_IMAGE_SUCCESS:
			return { loading: false, imageDetail: action.payload }
		case types.POST_IMAGE_FAIL:
			return { loading: false, error: action.payload }
		case types.POST_IMAGE_RESET:
			return {}
		default:
			return state
	}
}

export const getAllImagesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_IMAGES_REQUEST:
			return { loading: true }
		case types.GET_ALL_IMAGES_SUCCESS:
			return { loading: false, images: action.payload }
		case types.GET_ALL_IMAGES_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_IMAGES_RESET:
            return {}
		default:
			return state
	}
}

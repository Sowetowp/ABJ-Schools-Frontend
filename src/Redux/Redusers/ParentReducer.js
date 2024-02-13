import * as types from "../Types"

export const parentAuthReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.PARENT_AUTH_REQUEST:
			return { ...state, loading: true }
		case types.PARENT_AUTH_SUCCESS:
			return { loading: false, parentDetail: action.payload }
		case types.PARENT_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.PARENT_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}

export const parentGetAttendanceReducer = (state = {}, action) => {
	switch (action.type) {
		case types.PARENT_GET_ATTENDANCE_REQUEST:
			return { loading: true }
		case types.PARENT_GET_ATTENDANCE_SUCCESS:
			return { loading: false, attendance: action.payload }
		case types.PARENT_GET_ATTENDANCE_FAIL:
			return { loading: false, error: action.payload }
        case types.PARENT_GET_ATTENDANCE_RESET:
            return {}
		default:
			return state
	}
}

export const parentUpdatePasswordReducer = (state = {}, action) => {
	switch (action.type) {
		case types.PARENT_UPDATE_PASSWORD_REQUEST:
			return { loading: true }
		case types.PARENT_UPDATE_PASSWORD_SUCCESS:
			return { loading: false, update: action.payload }
		case types.PARENT_UPDATE_PASSWORD_FAIL:
			return { loading: false, error: action.payload }
        case types.PARENT_UPDATE_PASSWORD_RESET:
            return {}
		default:
			return state
	}
}
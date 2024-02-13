import * as types from "../Types"

export const studentAuthReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.STUDENT_AUTH_REQUEST:
			return { ...state, loading: true }
		case types.STUDENT_AUTH_SUCCESS:
			return { loading: false, studentDetail: action.payload }
		case types.STUDENT_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.STUDENT_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}

export const studentUpdatePasswordReducer = (state = {}, action) => {
	switch (action.type) {
		case types.STUDENT_UPDATE_PASSWORD_REQUEST:
			return { loading: true }
		case types.STUDENT_UPDATE_PASSWORD_SUCCESS:
			return { loading: false, update: action.payload }
		case types.STUDENT_UPDATE_PASSWORD_FAIL:
			return { loading: false, error: action.payload }
        case types.STUDENT_UPDATE_PASSWORD_RESET:
            return {}
		default:
			return state
	}
}

export const getAssignmentReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ASSIGNMENTS_REQUEST:
			return { loading: true }
		case types.GET_ASSIGNMENTS_SUCCESS:
			return { loading: false, assignments: action.payload }
		case types.GET_ASSIGNMENTS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ASSIGNMENTS_RESET:
            return {}
		default:
			return state
	}
}

export const getSelfReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_SELF_REQUEST:
			return { loading: true }
		case types.GET_SELF_SUCCESS:
			return { loading: false, self: action.payload }
		case types.GET_SELF_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_SELF_RESET:
            return {}
		default:
			return state
	}
}

export const recAssignmentReducer = (state = {}, action) => {
	switch (action.type) {
		case types.REC_ASSIGNMENTS_REQUEST:
			return { loading2: true }
		case types.REC_ASSIGNMENTS_SUCCESS:
			return { loading2: false, assignment: action.payload }
		case types.REC_ASSIGNMENTS_FAIL:
			return { loading2: false, error: action.payload }
        case types.REC_ASSIGNMENTS_RESET:
            return {}
		default:
			return state
	}
}

export const getCaReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_CA_REQUEST:
			return { loading: true }
		case types.GET_CA_SUCCESS:
			return { loading: false, cas: action.payload }
		case types.GET_CA_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_CA_RESET:
            return {}
		default:
			return state
	}
}

export const recCaReducer = (state = {}, action) => {
	switch (action.type) {
		case types.REC_CA_REQUEST:
			return { loading2: true }
		case types.REC_CA_SUCCESS:
			return { loading2: false, ca: action.payload }
		case types.REC_CA_FAIL:
			return { loading2: false, error: action.payload }
        case types.REC_CA_RESET:
            return {}
		default:
			return state
	}
}

export const getExamReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_EXAM_REQUEST:
			return { loading: true }
		case types.GET_EXAM_SUCCESS:
			return { loading: false, exams: action.payload }
		case types.GET_EXAM_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_EXAM_RESET:
            return {}
		default:
			return state
	}
}

export const recExamReducer = (state = {}, action) => {
	switch (action.type) {
		case types.REC_EXAM_REQUEST:
			return { loading2: true }
		case types.REC_EXAM_SUCCESS:
			return { loading2: false, exam: action.payload }
		case types.REC_EXAM_FAIL:
			return { loading2: false, error: action.payload }
        case types.REC_EXAM_RESET:
            return {}
		default:
			return state
	}
}
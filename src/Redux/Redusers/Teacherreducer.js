import * as types from "../Types"

export const getAllTeachersReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_TEACHERS_REQUEST:
			return { loading: true }
		case types.GET_ALL_TEACHERS_SUCCESS:
			return { loading: false, teachers: action.payload }
		case types.GET_ALL_TEACHERS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_TEACHERS_RESET:
            return {}
		default:
			return state
	}
}

export const getClassteacherReducer = (state = {loading: false, myClasses: null, day: null, classes: null, error: null }, action) => {
	switch (action.type) {
		case types.GET_CLASSTEACHER_REQUEST:
			return { ...state, loading: true }
		case types.GET_CLASSTEACHER_SUCCESS:
			return { ...state, loading: false, myClasses: action.payload, day: action.day, classes: action.classes }
		case types.GET_CLASSTEACHER_FAIL:
			return { ...state, loading: false, error: action.payload }
        case types.GET_CLASSTEACHER_RESET:
            return state
		default:
			return state
	}
}

export const searchTeachersReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SEARCH_TEACHERS_REQUEST:
			return { loading: true }
		case types.SEARCH_TEACHERS_SUCCESS:
			return { loading: false, teachers: action.payload }
		case types.SEARCH_TEACHERS_FAIL:
			return { loading: false, error: action.payload }
        case types.SEARCH_TEACHERS_RESET:
            return {}
		default:
			return state
	}
}

export const getSingleTeacherReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_SINGLE_TEACHER_REQUEST:
			return { loading: true }
		case types.GET_SINGLE_TEACHER_SUCCESS:
			return { loading: false, teacher: action.payload }
		case types.GET_SINGLE_TEACHER_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_SINGLE_TEACHER_RESET:
            return {}
		default:
			return state
	}
}

export const teacherGetStudentsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.TEACHER_GET_STUDENTS_REQUEST:
			return { loading: true }
		case types.TEACHER_GET_STUDENTS_SUCCESS:
			return { loading: false, students: action.payload }
		case types.TEACHER_GET_STUDENTS_FAIL:
			return { loading: false, error: action.payload }
        case types.TEACHER_GET_STUDENTS_RESET:
            return {}
		default:
			return state
	}
}

export const teacherGetResultsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.TEACHER_GET_RESULTS_REQUEST:
			return { loading: true }
		case types.TEACHER_GET_RESULTS_SUCCESS:
			return { loading: false, results: action.payload }
		case types.TEACHER_GET_RESULTS_FAIL:
			return { loading: false, error: action.payload }
        case types.TEACHER_GET_RESULTS_RESET:
            return {}
		default:
			return state
	}
}

export const studentGetResultsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.STUDENT_GET_RESULTS_REQUEST:
			return { loading: true }
		case types.STUDENT_GET_RESULTS_SUCCESS:
			return { loading: false, results: action.payload }
		case types.STUDENT_GET_RESULTS_FAIL:
			return { loading: false, error: action.payload }
        case types.STUDENT_GET_RESULTS_RESET:
            return {}
		default:
			return state
	}
}

export const teacherUpdatePasswordReducer = (state = {}, action) => {
	switch (action.type) {
		case types.TEACHER_UPDATE_PASSWORD_REQUEST:
			return { loading: true }
		case types.TEACHER_UPDATE_PASSWORD_SUCCESS:
			return { loading: false, update: action.payload }
		case types.TEACHER_UPDATE_PASSWORD_FAIL:
			return { loading: false, error: action.payload }
        case types.TEACHER_UPDATE_PASSWORD_RESET:
            return {}
		default:
			return state
	}
}

export const teacherRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case types.TEACHER_SIGN_UP_REQUEST:
			return { loading: true }
		case types.TEACHER_SIGN_UP_SUCCESS:
			return { loading: false, teacherDetail: action.payload }
		case types.TEACHER_SIGN_UP_FAIL:
			return { loading: false, error: action.payload }
		case types.TEACHER_SIGN_UP_RESET:
			return {}
		default:
			return state
	}
}

export const teacherAuthReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.TEACHER_AUTH_REQUEST:
			return { ...state, loading: true }
		case types.TEACHER_AUTH_SUCCESS:
			return { loading: false, teacherDetail: action.payload }
		case types.TEACHER_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.TEACHER_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}

export const postResultReducer = (state = {}, action) => {
    switch(action.type){
        case types.POST_RESULT_REQUEST:
            return {loading: true}
        case types.POST_RESULT_SUCCESS:
            return {loading: false, resultDetail:true}
        case types.POST_RESULT_FAIL:
            return {loading: false, error: action.payload}
        case types.POST_RESULT_RESET:
            return {}
        default:
            return state
    }
}

export const postAttendanceReducer = (state = {}, action) => {
    switch(action.type){
        case types.POST_ATTENDANCE_REQUEST:
            return {loading: true}
        case types.POST_ATTENDANCE_SUCCESS:
            return {loading: false, attendanceDetail:true}
        case types.POST_ATTENDANCE_FAIL:
            return {loading: false, error: action.payload}
        case types.POST_ATTENDANCE_RESET:
            return {}
        default:
            return state
    }
}

export const postAssignmentReducer = (state = {}, action) => {
    switch(action.type){
        case types.POST_ASSIGNMENT_REQUEST:
            return {loading: true}
        case types.POST_ASSIGNMENT_SUCCESS:
            return {loading: false, assignmentDetail:true}
        case types.POST_ASSIGNMENT_FAIL:
            return {loading: false, error: action.payload}
        case types.POST_ASSIGNMENT_RESET:
            return {}
        default:
            return state
    }
}

export const postCaReducer = (state = {}, action) => {
    switch(action.type){
        case types.POST_CA_REQUEST:
            return {loading: true}
        case types.POST_CA_SUCCESS:
            return {loading: false, CaDetail:true}
        case types.POST_CA_FAIL:
            return {loading: false, error: action.payload}
        case types.POST_CA_RESET:
            return {}
        default:
            return state
    }
}

export const postExamReducer = (state = {}, action) => {
    switch(action.type){
        case types.POST_EXAM_REQUEST:
            return {loading: true}
        case types.POST_EXAM_SUCCESS:
            return {loading: false, examDetail:true}
        case types.POST_EXAM_FAIL:
            return {loading: false, error: action.payload}
        case types.POST_EXAM_RESET:
            return {}
        default:
            return state
    }
}
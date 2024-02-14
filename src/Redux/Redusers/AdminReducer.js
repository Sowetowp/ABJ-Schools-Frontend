import * as types from "../Types"

export const adminRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_SIGN_UP_REQUEST:
			return { loading: true }
		case types.ADMIN_SIGN_UP_SUCCESS:
			return { loading: false, adminDetail: action.payload }
		case types.ADMIN_SIGN_UP_FAIL:
			return { loading: false, error: action.payload }
		case types.ADMIN_SIGN_UP_RESET:
			return {}
		default:
			return state
	}
}

export const adminAuthReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.ADMIN_AUTH_REQUEST:
			return { ...state, loading: true }
		case types.ADMIN_AUTH_SUCCESS:
			return { loading: false, adminDetail: action.payload }
		case types.ADMIN_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.ADMIN_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}

export const parentRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case types.PARENT_SIGN_UP_REQUEST:
			return { loading: true }
		case types.PARENT_SIGN_UP_SUCCESS:
			return { loading: false, parentDetail: action.payload }
		case types.PARENT_SIGN_UP_FAIL:
			return { loading: false, error: action.payload }
		case types.PARENT_SIGN_UP_RESET:
			return {}
		default:
			return state
	}
}

export const adminGetAllParentsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_GET_ALL_PARENTS_REQUEST:
			return { loading: true }
		case types.ADMIN_GET_ALL_PARENTS_SUCCESS:
			return { loading: false, parents: action.payload }
		case types.ADMIN_GET_ALL_PARENTS_FAIL:
			return { loading: false, error: action.payload }
        case types.ADMIN_GET_ALL_PARENTS_RESET:
            return {}
		default:
			return state
	}
}

export const adminGetAllTeachersReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_GET_ALL_TEACHERS_REQUEST:
			return { loading: true }
		case types.ADMIN_GET_ALL_TEACHERS_SUCCESS:
			return { loading: false, teachers: action.payload }
		case types.ADMIN_GET_ALL_TEACHERS_FAIL:
			return { loading: false, error: action.payload }
        case types.ADMIN_GET_ALL_TEACHERS_RESET:
            return {}
		default:
			return state
	}
}

export const adminSearchTeachersReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_SEARCH_TEACHERS_REQUEST:
			return { loading: true }
		case types.ADMIN_SEARCH_TEACHERS_SUCCESS:
			return { loading: false, searched: action.payload }
		case types.ADMIN_SEARCH_TEACHERS_FAIL:
			return { loading: false, error: action.payload }
        case types.ADMIN_SEARCH_TEACHERS_RESET:
            return {}
		default:
			return state
	}
}

export const adminSearchParentsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_SEARCH_PARENTS_REQUEST:
			return { loading: true }
		case types.ADMIN_SEARCH_PARENTS_SUCCESS:
			return { loading: false, searched: action.payload }
		case types.ADMIN_SEARCH_PARENTS_FAIL:
			return { loading: false, error: action.payload }
        case types.ADMIN_SEARCH_PARENTS_RESET:
            return {}
		default:
			return state
	}
}

export const adminGetAllStudentsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_GET_ALL_STUDENTS_REQUEST:
			return { loading: true }
		case types.ADMIN_GET_ALL_STUDENTS_SUCCESS:
			return { loading: false, students: action.payload }
		case types.ADMIN_GET_ALL_STUDENTS_FAIL:
			return { loading: false, error: action.payload }
        case types.ADMIN_GET_ALL_STUDENTS_RESET:
            return {}
		default:
			return state
	}
}

export const adminSearchStudentsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_SEARCH_STUDENTS_REQUEST:
			return { loading: true }
		case types.ADMIN_SEARCH_STUDENTS_SUCCESS:
			return { loading: false, searched: action.payload }
		case types.ADMIN_SEARCH_STUDENTS_FAIL:
			return { loading: false, error: action.payload }
        case types.ADMIN_SEARCH_STUDENTS_RESET:
            return {}
		default:
			return state
	}
}

export const adminSearchNewsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_SEARCH_NEWS_REQUEST:
			return { loading: true }
		case types.ADMIN_SEARCH_NEWS_SUCCESS:
			return { loading: false, searched: action.payload }
		case types.ADMIN_SEARCH_NEWS_FAIL:
			return { loading: false, error: action.payload }
        case types.ADMIN_SEARCH_NEWS_RESET:
            return {}
		default:
			return state
	}
}

export const adminSearchImagesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_SEARCH_IMAGES_REQUEST:
			return { loading: true }
		case types.ADMIN_SEARCH_IMAGES_SUCCESS:
			return { loading: false, searched: action.payload }
		case types.ADMIN_SEARCH_IMAGES_FAIL:
			return { loading: false, error: action.payload }
        case types.ADMIN_SEARCH_IMAGES_RESET:
            return {}
		default:
			return state
	}
}

export const getAllSubjectsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_SUBJECTS_REQUEST:
			return { loading: true }
		case types.GET_ALL_SUBJECTS_SUCCESS:
			return { loading: false, subjects: action.payload }
		case types.GET_ALL_SUBJECTS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_SUBJECTS_RESET:
            return {}
		default:
			return state
	}
}

export const getAllPostsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_POST_REQUEST:
			return { loading: true }
		case types.GET_ALL_POST_SUCCESS:
			return { loading: false, posts: action.payload }
		case types.GET_ALL_POST_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_POST_RESET:
            return {}
		default:
			return state
	}
}

export const getAllClassesReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_CLASSES_REQUEST:
			return { loading: true }
		case types.GET_ALL_CLASSES_SUCCESS:
			return { loading: false, classes: action.payload , teachers: action.teachers}
		case types.GET_ALL_CLASSES_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_CLASSES_RESET:
            return {}
		default:
			return state
	}
}

export const getAllDepartmentsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_DEPARTMENTS_REQUEST:
			return { loading: true }
		case types.GET_ALL_DEPARTMENTS_SUCCESS:
			return { loading: false, departments: action.payload }
		case types.GET_ALL_DEPARTMENTS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_DEPARTMENTS_RESET:
            return {}
		default:
			return state
	}
}

export const studentRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case types.STUDENT_SIGN_UP_REQUEST:
			return { loading: true }
		case types.STUDENT_SIGN_UP_SUCCESS:
			return { loading: false, studentDetail: action.payload }
		case types.STUDENT_SIGN_UP_FAIL:
			return { loading: false, error: action.payload }
		case types.STUDENT_SIGN_UP_RESET:
			return {}
		default:
			return state
	}
}

export const adminGetResultsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.ADMIN_GET_RESULTS_REQUEST:
			return { loading: true }
		case types.ADMIN_GET_RESULTS_SUCCESS:
			return { loading: false, results: action.payload }
		case types.ADMIN_GET_RESULTS_FAIL:
			return { loading: false, error: action.payload }
        case types.ADMIN_GET_RESULTS_RESET:
            return {}
		default:
			return state
	}
}

export const studentDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_STUDENT_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_STUDENT_SUCCESS:
			return { loading: false, success : true }
		case types.DELETE_SINGLE_STUDENT_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const paymentDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_PAYMENT_REQUEST:
			return { loadingd: true }
		case types.DELETE_PAYMENT_SUCCESS:
			return { loadingd: false, success : true }
		case types.DELETE_PAYMENT_FAIL:
			return { loadingd: false, error: action.payload }
		default:
			return state
	}
}

export const getPaymentReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_PAYMENT_REQUEST:
			return { loading: true }
		case types.GET_PAYMENT_SUCCESS:
			return { loading: false, payment: action.payload }
		case types.GET_PAYMENT_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_PAYMENT_RESET:
            return {}
		default:
			return state
	}
}

export const getByClassReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_BY_CLASS_REQUEST:
			return { loading: true }
		case types.GET_BY_CLASS_SUCCESS:
			return { loading: false, students: action.payload }
		case types.GET_BY_CLASS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_BY_CLASS_RESET:
            return {}
		default:
			return state
	}
}

export const makePaymentReducer = (state = {}, action) => {
	switch (action.type) {
		case types.MAKE_PAYMENT_REQUEST:
			return { loadingm: true }
		case types.MAKE_PAYMENT_SUCCESS:
			return { loadingm: false, paymentDetail: action.payload }
		case types.MAKE_PAYMENT_FAIL:
			return { loadingm: false, error: action.payload }
		case types.MAKE_PAYMENT_RESET:
			return {}
		default:
			return state
	}
}

export const updateFeeReducer = (state = {}, action) => {
	switch (action.type) {
		case types.UPDATE_FEE_REQUEST:
			return { loadingm: true }
		case types.UPDATE_FEE_SUCCESS:
			return { loadingm: false, fee: action.payload }
		case types.UPDATE_FEE_FAIL:
			return { loadingm: false, error: action.payload }
		case types.UPDATE_FEE_RESET:
			return {}
		default:
			return state
	}
}

export const updatePaidReducer = (state = {}, action) => {
	switch (action.type) {
		case types.UPDATE_PAID_REQUEST:
			return { loadingm: true }
		case types.UPDATE_PAID_SUCCESS:
			return { loadingm: false, paid: action.payload }
		case types.UPDATE_PAID_FAIL:
			return { loadingm: false, error: action.payload }
		case types.UPDATE_PAID_RESET:
			return {}
		default:
			return state
	}
}

export const updateClassReducer = (state = {}, action) => {
	switch (action.type) {
		case types.UPDATE_CLASS_REQUEST:
			return { loading: true }
		case types.UPDATE_CLASS_SUCCESS:
			return { loading: false, class: action.payload }
		case types.UPDATE_CLASS_FAIL:
			return { loading: false, error: action.payload }
		case types.UPDATE_CLASS_RESET:
			return {}
		default:
			return state
	}
}

export const teacherDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_TEACHER_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_TEACHER_SUCCESS:
			return { loading: false, success : true }
		case types.DELETE_SINGLE_TEACHER_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const parentDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_PARENT_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_PARENT_SUCCESS:
			return { loading: false, success : true }
		case types.DELETE_SINGLE_PARENT_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const imageDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_IMAGE_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_IMAGE_SUCCESS:
			return { loading: false, success : true }
		case types.DELETE_SINGLE_IMAGE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const newsDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_NEWS_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_NEWS_SUCCESS:
			return { loading: false, success : true }
		case types.DELETE_SINGLE_NEWS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const resultDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_RESULT_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_RESULT_SUCCESS:
			return { loading: false, success : true }
		case types.DELETE_SINGLE_RESULT_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const eventDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_EVENT_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_EVENT_SUCCESS:
			return { loading: false, success1 : true }
		case types.DELETE_SINGLE_EVENT_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const termDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_TERM_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_TERM_SUCCESS:
			return { loading: false, success2 : true }
		case types.DELETE_SINGLE_TERM_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const sessionDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_SESSION_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_SESSION_SUCCESS:
			return { loading: false, success : true }
		case types.DELETE_SINGLE_SESSION_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const getAllReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_REQUEST:
			return { loading: true }
		case types.GET_ALL_SUCCESS:
			return { loading: false, all: action.payload }
		case types.GET_ALL_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_RESET:
            return {}
		default:
			return state
	}
}

export const getBroadsheetReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_BROADSHEET_REQUEST:
			return { loading: true }
		case types.GET_BROADSHEET_SUCCESS:
			return { loading: false, broadsheet: action.payload }
		case types.GET_BROADSHEET_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_BROADSHEET_RESET:
            return {}
		default:
			return state
	}
}
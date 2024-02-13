import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader, header } from "../Header"

const url = config.liveUrl

export const admin_logout = () => (dispatch) => {
	const parentWindow = window.parent;
	dispatch({ type: types.ADMIN_AUTH_LOGOUT })
	parentWindow.location.href = '/alogin';
}

export const admin_register = (dada) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_SIGN_UP_REQUEST })
		
		const { data } = await axios.post(`${url}/admin`, dada)
		
		if (data.status === 'ok') {
			dispatch({ type: types.ADMIN_SIGN_UP_SUCCESS, payload: data.data })
			toast.success('admin Created Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.ADMIN_SIGN_UP_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: types.ADMIN_AUTH_REQUEST })

		const { data } = await axios.post(
			`${url}/admin/login`,
			{ email, password },
			{ headers: header }
		)

		if (data.status === 'ok') {
			dispatch({ type: types.ADMIN_AUTH_SUCCESS, payload: data.data })
			toast.success(`You are welcome, ${data.data.firstName}`, {
				position: 'top-right',
			})
		}
	} catch (error) {
		// const message = error.response
		// 	? error.response.data.message
		// 	: 'Something went wrong'
		// if (message === 'Not Authorized') {
		// 	dispatch(admin_logout())
		// }
		// dispatch({ type: types.ADMIN_AUTH_FAIL, payload: message })
		// toast.error(message, { position: 'top-right' })
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.ADMIN_SIGN_UP_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_get_all_teachers = (page) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_GET_ALL_TEACHERS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.get(`${url}/admin/getTeachers?page=${page}&pageSize=12`,{ headers: authHeader(adminDetail.token) })
        if(data.status === "ok"){
            dispatch({ type: types.ADMIN_GET_ALL_TEACHERS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.ADMIN_GET_ALL_TEACHERS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_get_all_parents = (page) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_GET_ALL_PARENTS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.get(`${url}/admin/getParents?page=${page}&pageSize=12`,{ headers: authHeader(adminDetail.token) })
        if(data.status === "ok"){
            dispatch({ type: types.ADMIN_GET_ALL_PARENTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.ADMIN_GET_ALL_PARENTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_get_all_students = (page) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_GET_ALL_STUDENTS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.get(`${url}/admin/studentsignup?page=${page}&pageSize=12`,{ headers: authHeader(adminDetail.token) })
        if(data.status == "ok"){
            dispatch({ type: types.ADMIN_GET_ALL_STUDENTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.ADMIN_GET_ALL_STUDENTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_all_subjects = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_SUBJECTS_REQUEST })
		
		const { data } = await axios.get(`${url}/admin/createsubject`)
        if(data.status == "ok"){
            dispatch({ type: types.GET_ALL_SUBJECTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.GET_ALL_SUBJECTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_search_teachers = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_SEARCH_TEACHERS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.get(`${url}/admin/searchTeachers`, { headers: authHeader(adminDetail.token) })
        if(data.status == "ok"){
            dispatch({ type: types.ADMIN_SEARCH_TEACHERS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.ADMIN_SEARCH_TEACHERS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_search_parents = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_SEARCH_PARENTS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.get(`${url}/admin/searchParents`, { headers: authHeader(adminDetail.token) })
        if(data.status == "ok"){
            dispatch({ type: types.ADMIN_SEARCH_PARENTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.ADMIN_SEARCH_PARENTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_search_students = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_SEARCH_STUDENTS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.get(`${url}/admin/searchStudents`, { headers: authHeader(adminDetail.token) })
        if(data.status == "ok"){
            dispatch({ type: types.ADMIN_SEARCH_STUDENTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.ADMIN_SEARCH_STUDENTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_search_news = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_SEARCH_NEWS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.get(`${url}/news/searchnews`, { headers: authHeader(adminDetail.token) } )
        if(data.status == "ok"){
            dispatch({ type: types.ADMIN_SEARCH_NEWS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.ADMIN_SEARCH_NEWS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_search_images = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_SEARCH_IMAGES_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.get(`${url}/gallery/searchimages`, { headers: authHeader(adminDetail.token) } )
        if(data.status == "ok"){
            dispatch({ type: types.ADMIN_SEARCH_IMAGES_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.ADMIN_SEARCH_IMAGES_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_all_classes = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_CLASSES_REQUEST })
		
		const { data } = await axios.get(`${url}/admin/createclass`)
        if(data.status == "ok"){
            dispatch({ type: types.GET_ALL_CLASSES_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.GET_ALL_CLASSES_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_all_departments = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_DEPARTMENTS_REQUEST })
		
		const { data } = await axios.get(`${url}/admin/createdept`)
        if(data.status == "ok"){
            dispatch({ type: types.GET_ALL_DEPARTMENTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.GET_ALL_DEPARTMENTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_all_posts = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_POST_REQUEST })
		
		const { data } = await axios.get(`${url}/admin/createpost`)
        if(data.status == "ok"){
            dispatch({ type: types.GET_ALL_POST_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		
		dispatch({ type: types.GET_ALL_POST_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const student_register = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.STUDENT_SIGN_UP_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/studentsignup`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
		
		if (data.status === 'ok') {
			dispatch({ type: types.STUDENT_SIGN_UP_SUCCESS, payload: data.data })
			toast.success('student registered Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.STUDENT_SIGN_UP_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const make_payment = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.MAKE_PAYMENT_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/payment`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
		
		if (data.status === 'ok') {
			dispatch({ type: types.MAKE_PAYMENT_SUCCESS, payload: data.data })
			dispatch(get_payment(tea))
			toast.success('Success!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.MAKE_PAYMENT_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_payment = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_PAYMENT_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/paymentclass`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
		
		if (data.status === 'ok') {
			dispatch({ type: types.GET_PAYMENT_SUCCESS, payload: data.data })
			toast.success('Success!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.GET_PAYMENT_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_payment = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_PAYMENT_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/paymentdelete`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
		
		if (data.status === 'ok') {
			dispatch({ type: types.DELETE_PAYMENT_SUCCESS, payload: data.data })
			dispatch(get_payment(tea))
			toast.success('Success!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_PAYMENT_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const admin_get_results = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.ADMIN_GET_RESULTS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/result`,
			id,
			{ headers: authHeader(adminDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.ADMIN_GET_RESULTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.ADMIN_GET_RESULTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_student = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_STUDENT_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.delete(`${url}/admin/deletestudent/${id}`, { headers: authHeader(adminDetail.token) })

		dispatch({ type: types.DELETE_SINGLE_STUDENT_SUCCESS})
		toast.success('student deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_SINGLE_STUDENT_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_teacher = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_TEACHER_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.delete(`${url}/admin/deleteteacher/${id}`, { headers: authHeader(adminDetail.token) })

		dispatch({ type: types.DELETE_SINGLE_TEACHER_SUCCESS})
		toast.success('teacher deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_SINGLE_TEACHER_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_parent = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_PARENT_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.delete(`${url}/admin/deleteparent/${id}`, { headers: authHeader(adminDetail.token) })

		dispatch({ type: types.DELETE_SINGLE_PARENT_SUCCESS})
		toast.success('parent deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_SINGLE_PARENT_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_news = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_NEWS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.delete(`${url}/admin/deletenews/${id}`, { headers: authHeader(adminDetail.token) })

		dispatch({ type: types.DELETE_SINGLE_NEWS_SUCCESS})
		toast.success('news deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_SINGLE_NEWS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_image = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_IMAGE_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.delete(`${url}/admin/deleteimage/${id}`, { headers: authHeader(adminDetail.token) })

		dispatch({ type: types.DELETE_SINGLE_IMAGE_SUCCESS})
		toast.success('image deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_SINGLE_IMAGE_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_result = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_RESULT_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.delete(`${url}/admin/deleteresult/${id}`, { headers: authHeader(adminDetail.token) })

		dispatch({ type: types.DELETE_SINGLE_RESULT_SUCCESS})
		toast.success('result deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_SINGLE_RESULT_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_session = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_SESSION_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.delete(`${url}/admin/deletesession/${id}`, { headers: authHeader(adminDetail.token) })

		dispatch({ type: types.DELETE_SINGLE_SESSION_SUCCESS})
		toast.success('session deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_SINGLE_SESSION_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_term = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_TERM_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.delete(`${url}/admin/deleteterm/${id}`, { headers: authHeader(adminDetail.token) })

		dispatch({ type: types.DELETE_SINGLE_TERM_SUCCESS})
		toast.success('term deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_SINGLE_TERM_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_event = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_EVENT_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.delete(`${url}/admin/deleteevent/${id}`, { headers: authHeader(adminDetail.token) })

		dispatch({ type: types.DELETE_SINGLE_EVENT_SUCCESS})
		toast.success('event deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.DELETE_SINGLE_EVENT_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_all = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.get(
			`${url}/admin/`,
			{ headers: authHeader(adminDetail.token) }
		)
		
		if (data.status === 'ok') {
			dispatch({ type: types.GET_ALL_SUCCESS, payload: data.data })
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.GET_ALL_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_broadsheet = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_BROADSHEET_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/broadsheet`,
			id,
			{ headers: authHeader(adminDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.GET_BROADSHEET_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.GET_BROADSHEET_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_by_class = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_BY_CLASS_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/sbyclass`,
			id,
			{ headers: authHeader(adminDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.GET_BY_CLASS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.GET_BY_CLASS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const update_fee = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.UPDATE_FEE_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/updatefee`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.UPDATE_FEE_SUCCESS, payload: data.data })
			toast.success('Success!', {
				position: 'top-right',
			})
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.UPDATE_FEE_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const update_paid = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.UPDATE_PAID_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/updatepaid`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.UPDATE_PAID_SUCCESS, payload: data.data })
			toast.success(data.message, {
				position: 'top-right',
			})
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(admin_logout())
		}
		dispatch({ type: types.UPDATE_PAID_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}
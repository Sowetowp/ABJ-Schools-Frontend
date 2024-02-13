import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader, header } from "../Header"

const url = config.liveUrl
export const student_logout = () => (dispatch) => {
	dispatch({ type: types.STUDENT_AUTH_LOGOUT })
	// document.location.href = '/slogin'
	const parentWindow = window.parent;
	parentWindow.location.href = '/slogin';
}

export const student_login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: types.STUDENT_AUTH_REQUEST })

		const { data } = await axios.post(
			`${url}/student/`,
			{ email, password },
			{ headers: header }
		)

		if (data.status === 'ok') {
			dispatch({ type: types.STUDENT_AUTH_SUCCESS, payload: data.data })
			toast.success(`You are welcome, ${data.data.firstName}`, {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.STUDENT_AUTH_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const student_get_results = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.STUDENT_GET_RESULTS_REQUEST })
		const {
			studentAuth: { studentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/student/result`,
			tea,
			{ headers: authHeader(studentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.STUDENT_GET_RESULTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.STUDENT_GET_RESULTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_assignments = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ASSIGNMENTS_REQUEST })
		const {
			studentAuth: { studentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/student/assignment`,
			tea,
			{ headers: authHeader(studentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.GET_ASSIGNMENTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.GET_ASSIGNMENTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const rec_assignment = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.REC_ASSIGNMENTS_REQUEST })
		const {
			studentAuth: { studentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/student/recassignment`,
			tea,
			{ headers: authHeader(studentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.REC_ASSIGNMENTS_SUCCESS, payload: data.data })
			dispatch(get_assignments(tea))
			toast.success(data.message, {
				position: 'top-right',
			})
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.REC_ASSIGNMENTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_ca = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_CA_REQUEST })
		const {
			studentAuth: { studentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/student/ca`,
			tea,
			{ headers: authHeader(studentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.GET_CA_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.GET_CA_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_self = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_SELF_REQUEST })
		const {
			studentAuth: { studentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/student/self`,
			tea,
			{ headers: authHeader(studentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.GET_SELF_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.GET_SELF_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const rec_ca = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.REC_CA_REQUEST })
		const {
			studentAuth: { studentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/student/recca`,
			tea,
			{ headers: authHeader(studentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.REC_CA_SUCCESS, payload: data.data })
			dispatch(get_ca(tea))
			toast.success(data.message, {
				position: 'top-right',
			})
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.REC_CA_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_exam = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_EXAM_REQUEST })
		const {
			studentAuth: { studentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/student/exam`,
			tea,
			{ headers: authHeader(studentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.GET_EXAM_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.GET_EXAM_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const rec_exam = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.REC_EXAM_REQUEST })
		const {
			studentAuth: { studentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/student/recexam`,
			tea,
			{ headers: authHeader(studentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.REC_EXAM_SUCCESS, payload: data.data })
			dispatch(get_exam(tea))
			toast.success(data.message, {
				position: 'top-right',
			})
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.REC_EXAM_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const student_update_password = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.STUDENT_UPDATE_PASSWORD_REQUEST })
		const {
			studentAuth: { studentDetail },
		} = getState()
		const { data } = await axios.patch(
			`${url}/student/updatepassword/${studentDetail.id}`,
			tea,
			{ headers: authHeader(studentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.STUDENT_UPDATE_PASSWORD_SUCCESS, payload: data.data })
			toast.success(data.message, {
				position: 'top-right',
			})
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(student_logout())
		}
		dispatch({ type: types.STUDENT_UPDATE_PASSWORD_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}
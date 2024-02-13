import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader, header } from "../Header"
import { admin_logout } from "./AdminAction"

const url = config.liveUrl

export const parent_logout = () => (dispatch) => {
	const parentWindow = window.parent;
	dispatch({ type: types.PARENT_AUTH_LOGOUT })
	parentWindow.location.href = '/plogin';
}

export const parent_register = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.PARENT_SIGN_UP_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/parentsignup`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
		
		if (data.status === 'ok') {
			dispatch({ type: types.PARENT_SIGN_UP_SUCCESS, payload: data.data })
			toast.success('Parent registered Successfully!', {
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
		dispatch({ type: types.PARENT_SIGN_UP_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const parent_login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: types.PARENT_AUTH_REQUEST })

		const { data } = await axios.post(
			`${url}/parent/`,
			{ email, password },
			{ headers: header }
		)

		if (data.status === 'ok') {
			dispatch({ type: types.PARENT_AUTH_SUCCESS, payload: data.data })
			toast.success(`You are welcome, ${data.data.firstName}`, {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(parent_logout())
		}
		dispatch({ type: types.PARENT_AUTH_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const parent_get_results = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.STUDENT_GET_RESULTS_REQUEST })
		const {
			parentAuth: { parentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/parent/result`,
			tea,
			{ headers: authHeader(parentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.STUDENT_GET_RESULTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(parent_logout())
		}
		dispatch({ type: types.STUDENT_GET_RESULTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const parent_get_attendance = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.PARENT_GET_ATTENDANCE_REQUEST })
		const {
			parentAuth: { parentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/parent/attendance`,
			tea,
			{ headers: authHeader(parentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.PARENT_GET_ATTENDANCE_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(parent_logout())
		}
		dispatch({ type: types.PARENT_GET_ATTENDANCE_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const parent_update_password = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.PARENT_UPDATE_PASSWORD_REQUEST })
		const {
			parentAuth: { parentDetail },
		} = getState()
		const { data } = await axios.patch(
			`${url}/parent/updatepassword/${parentDetail.id}`,
			tea,
			{ headers: authHeader(parentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.PARENT_UPDATE_PASSWORD_SUCCESS, payload: data.data })
			toast.success(data.message, {
				position: 'top-right',
			})
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(parent_logout())
		}
		dispatch({ type: types.PARENT_UPDATE_PASSWORD_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_selfp = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_SELF_REQUEST })
		const {
			parentAuth: { parentDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/parent/self`,
			tea,
			{ headers: authHeader(parentDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.GET_SELF_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(parent_logout())
		}
		dispatch({ type: types.GET_SELF_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}
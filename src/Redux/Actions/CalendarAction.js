import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader } from "../Header"

const url = config.liveUrl

export const get_all_session = () => async (dispatch) => {
	try {
		dispatch({ type: types.GET_ALL_SESSION_REQUEST })

		const { data } = await axios.get(`${url}/calendar/session`)
        if(data.status == "ok"){
            dispatch({ type: types.GET_ALL_SESSION_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_ALL_SESSION_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_ste = (page) => async (dispatch) => {
	try {
		dispatch({ type: types.GET_STE_REQUEST })

		const { data } = await axios.get(`${url}/calendar/gettands`, {
			params: { page: page.page, page1: page.page1, page2: page.page2, pageSize: "15" },
		  })
        if(data.status == "ok"){
            dispatch({ type: types.GET_STE_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_STE_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const create_session = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.POST_SESSION_REQUEST })

		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/calendar/session`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
		if (data.status === 'ok') {
			dispatch({ type: types.POST_SESSION_SUCCESS, payload: data.data })
			toast.success('SESSION posted Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.POST_SESSION_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const create_term = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.POST_TERM_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/calendar/term`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
		if (data.status === 'ok') {
			dispatch({ type: types.POST_TERM_SUCCESS, payload: data.data })
			toast.success('Term posted Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.POST_TERM_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const create_event = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.POST_EVENT_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/calendar/event`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
		if (data.status === 'ok') {
			dispatch({ type: types.POST_EVENT_SUCCESS, payload: data.data })
			toast.success('event posted Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.POST_EVENT_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const search_calendar = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.SEARCH_CALENDAR_REQUEST })
		const { data } = await axios.get(`${url}/calendar/searchcalendar`)
        if(data.status == "ok"){
            dispatch({ type: types.SEARCH_CALENDAR_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.SEARCH_CALENDAR_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_main_calendar = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_MAIN_CALENDAR_REQUEST })
		const { data } = await axios.get(`${url}/calendar/maincalendar`)
        if(data.status == "ok"){
            dispatch({ type: types.GET_MAIN_CALENDAR_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_MAIN_CALENDAR_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

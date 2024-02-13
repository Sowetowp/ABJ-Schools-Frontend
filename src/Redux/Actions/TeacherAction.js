import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { authHeader, header } from "../Header"

const url = config.liveUrl
export const teacher_logout = () => (dispatch) => {
	dispatch({ type: types.TEACHER_AUTH_LOGOUT })
	// document.location.href = '/tlogin'
	const parentWindow = window.parent;
	parentWindow.location.href = '/tlogin';
}

export const get_all_teachers = (page) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_TEACHERS_REQUEST })

		const { data } = await axios.get(`${url}/teacher/?page=${page}&pageSize=12`)
        if(data.status == "ok"){
            dispatch({ type: types.GET_ALL_TEACHERS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
		dispatch({ type: types.GET_ALL_TEACHERS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_classteacher = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_CLASSTEACHER_REQUEST })
		const {
			teacherAuth: { teacherDetail },
		} = getState()
		const { data } = await axios.get(`${url}/teacher/class/${id}`, { headers: authHeader(teacherDetail.token) })
        if(data.status === "ok"){
            dispatch({ type: types.GET_CLASSTEACHER_SUCCESS, payload: data.data, day: data.today, classes: data.classes })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
		dispatch({ type: types.GET_CLASSTEACHER_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const search_teachers = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.SEARCH_TEACHERS_REQUEST })

		const { data } = await axios.get(`${url}/teacher/search`)
        if(data.status == "ok"){
            dispatch({ type: types.SEARCH_TEACHERS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
		dispatch({ type: types.SEARCH_TEACHERS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_single_teacher = (id) => async (dispatch) => {
	try {
		dispatch({ type: types.GET_SINGLE_TEACHER_REQUEST })

		const { data } = await axios.get(`${url}/teacher/${id}`)
        if(data.status == "ok"){
            dispatch({ type: types.GET_SINGLE_TEACHER_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
		dispatch({ type: types.GET_SINGLE_TEACHER_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const teacher_get_students = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.TEACHER_GET_STUDENTS_REQUEST })
		const {
			teacherAuth: { teacherDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/teacher/getstudents`,
			id,
			{ headers: authHeader(teacherDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.TEACHER_GET_STUDENTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
		dispatch({ type: types.TEACHER_GET_STUDENTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const teacher_get_results = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.TEACHER_GET_RESULTS_REQUEST })
		const {
			teacherAuth: { teacherDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/teacher/getresult`,
			id,
			{ headers: authHeader(teacherDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.TEACHER_GET_RESULTS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
		dispatch({ type: types.TEACHER_GET_RESULTS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const teacher_update_password = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.TEACHER_UPDATE_PASSWORD_REQUEST })
		const {
			teacherAuth: { teacherDetail },
		} = getState()
		const { data } = await axios.patch(
			`${url}/teacher/updatepassword/${teacherDetail.id}`,
			tea,
			{ headers: authHeader(teacherDetail.token) }
		)
        if(data.status == "ok"){
            dispatch({ type: types.TEACHER_UPDATE_PASSWORD_SUCCESS, payload: data.data })
			toast.success(data.message, {
				position: 'top-right',
			})
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
		dispatch({ type: types.TEACHER_UPDATE_PASSWORD_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const teacher_register = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.TEACHER_SIGN_UP_REQUEST })
		const {
			adminAuth: { adminDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/admin/teachersignup`,
			tea,
			{ headers: authHeader(adminDetail.token) }
		)
		
		if (data.status === 'ok') {
			dispatch({ type: types.TEACHER_SIGN_UP_SUCCESS, payload: data.data })
			toast.success('Teacher registered Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.TEACHER_SIGN_UP_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const teacher_login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: types.TEACHER_AUTH_REQUEST })

		const { data } = await axios.post(
			`${url}/teacher/login`,
			{ email, password },
			{ headers: header }
		)

		if (data.status === 'ok') {
			dispatch({ type: types.TEACHER_AUTH_SUCCESS, payload: data.data })
			toast.success(`You are welcome, ${data.data.firstName}`, {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
		dispatch({ type: types.TEACHER_AUTH_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const post_result = (aClassResult) => async(dispatch, getState) => {
    try {
        dispatch({type: types.POST_RESULT_REQUEST})

        const {
			teacherAuth: { teacherDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/teacher/result`,
			aClassResult,
			{ headers: authHeader(teacherDetail.token) }
		)
        if(data.status === 'ok'){
            dispatch({type: types.POST_RESULT_SUCCESS, payload: data.message})
            toast.success("Result Posted successfully", {
                position: "top-right"
            })
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.POST_RESULT_FAIL, payload: message})
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const post_attendance = (mergedArray) => async(dispatch, getState) => {
    try {
        dispatch({type: types.POST_ATTENDANCE_REQUEST})

        const {
			teacherAuth: { teacherDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/teacher/attendance`,
			mergedArray,
			{ headers: authHeader(teacherDetail.token) }
		)
        if(data.status === 'ok'){
            dispatch({type: types.POST_ATTENDANCE_SUCCESS, payload: data.message})
			dispatch(get_classteacher(teacherDetail.id))
            toast.success("Attendance Taken successfully", {
                position: "top-right"
            })
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.POST_ATTENDANCE_FAIL, payload: message})
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const post_assignment = (tea) => async(dispatch, getState) => {
    try {
        dispatch({type: types.POST_ASSIGNMENT_REQUEST})

        const {
			teacherAuth: { teacherDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/teacher/assignment`,
			tea,
			{ headers: authHeader(teacherDetail.token) }
		)
        if(data.status === 'ok'){
            dispatch({type: types.POST_ASSIGNMENT_SUCCESS, payload: data.message})
            toast.success("Posted successfully", {
                position: "top-right"
            })
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.POST_ASSIGNMENT_FAIL, payload: message})
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const post_ca = (tea) => async(dispatch, getState) => {
    try {
        dispatch({type: types.POST_CA_REQUEST})

        const {
			teacherAuth: { teacherDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/teacher/ca`,
			tea,
			{ headers: authHeader(teacherDetail.token) }
		)
        if(data.status === 'ok'){
            dispatch({type: types.POST_CA_SUCCESS, payload: data.message})
            toast.success("Posted successfully", {
                position: "top-right"
            })
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.POST_CA_FAIL, payload: message})
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const post_exam = (tea) => async(dispatch, getState) => {
    try {
        dispatch({type: types.POST_EXAM_REQUEST})

        const {
			teacherAuth: { teacherDetail },
		} = getState()
		const { data } = await axios.post(
			`${url}/teacher/exam`,
			tea,
			{ headers: authHeader(teacherDetail.token) }
		)
        if(data.status === 'ok'){
            dispatch({type: types.POST_EXAM_SUCCESS, payload: data.message})
            toast.success("Posted successfully", {
                position: "top-right"
            })
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.POST_EXAM_FAIL, payload: message})
		if (message === 'Not Authorized') {
			dispatch(teacher_logout())
		}
        toast.error(message, {
            position: "top-right"
        })
    }
}
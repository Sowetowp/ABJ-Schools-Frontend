import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
const url = config.liveUrl

export const create_news = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.POST_NEWS_REQUEST })

		const { data } = await axios.post(`${url}/news`, tea)
		
		if (data.status === 'ok') {
			dispatch({ type: types.POST_NEWS_SUCCESS, payload: data.data })
			toast.success('news posted Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.POST_NEWS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_all_news = (page) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_NEWS_REQUEST })

		const { data } = await axios.get(`${url}/news/`, {
			params: { page: page, pageSize: 15 },
		})
        if(data.status == "ok"){
            dispatch({ type: types.GET_ALL_NEWS_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_ALL_NEWS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}
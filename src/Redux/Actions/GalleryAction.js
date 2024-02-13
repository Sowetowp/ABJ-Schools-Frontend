import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
const url = config.liveUrl

export const create_image = (tea) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.POST_IMAGE_REQUEST })

		const { data } = await axios.post(`${url}/gallery`, tea)
		
		if (data.status === 'ok') {
			dispatch({ type: types.POST_IMAGE_SUCCESS, payload: data.data })
			toast.success('image uploaded Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.POST_IMAGE_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_all_images = (page) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_IMAGES_REQUEST })

		const { data } = await axios.get(`${url}/gallery/`, {
			params: { page: page, pageSize: "15" },
		  })
        if(data.status == "ok"){
            dispatch({ type: types.GET_ALL_IMAGES_SUCCESS, payload: data.data })
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_ALL_IMAGES_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}
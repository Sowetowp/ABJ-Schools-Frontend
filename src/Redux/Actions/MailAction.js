import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"

const url = config.liveUrl
export const contact_us = (info) => async(dispatch, getState) => {
    
    try {
        dispatch({type: types.CONTACT_US_REQUEST})

        const {contactUs: {mailDetail},} = getState()
        const {data} = await axios.post(`${url}/mail/`, info)
        if(data.message === "success"){
            dispatch({type: types.CONTACT_US_SUCCESS, payload: data.message})
            toast.success("Email sent successfully", {
                position: "top-right"
            })
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.CONTACT_US_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const post_sub = (info) => async(dispatch, getState) => {
    try {
        dispatch({type: types.POST_SUB_REQUEST})

        const {postSub: {subDetail},} = getState()
        const {data} = await axios.post(`${url}/mail/newsletter`, info)
        if(data.message === "success"){
            dispatch({type: types.POST_SUB_SUCCESS, payload: data.message})
            toast.success("Subscription successful", {
                position: "top-right"
            })
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.POST_SUB_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}
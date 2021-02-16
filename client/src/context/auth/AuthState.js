import React, { useReducer } from "react";
import axios from 'axios'
import authReducer from "./authReducer";
import AuthContext from "./authContext";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../types";

const AuthState = props  => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)
//load user

//register user

const register = async formData => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post('/api/users', formData, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        console.error(err.message);
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
        })



    }
}


//login user

//logout user

//clear errors
return (
    <AuthContext.Provider 
    value={{
         token: state.token, 
         isAuthenticated: state.isAuthenticated, 
         loading: state.loading, 
         user: state.user, 
         error: state.error , 
         register

    }}>
{ props.children }
    </AuthContext.Provider>
)
}

export default AuthState;
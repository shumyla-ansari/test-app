import React, { useReducer } from "react";
import {v4 as uuid} from "uuid"; 
import contactReducer from "./contactReducer";
import ContactContext from "./contactContext";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_CURRENT,
  CLEAR_FILTER,
} from "../types";

const ContactState = props  => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Sara Watsin',
                email: 'sara@gmail.com',
                phone: '222-222-332-2',
                type: 'personal'

        },
        {
            id: 2,
            name: 'Mandy Hatsin',
            email: 'mandy@gmail.com',
            phone: '222-22444-332-2',
            type: 'personal'

    },
    {
        id: 3,
        name: 'Emma Watsom',
        email: 'emma@gmail.com',
        phone: '3422-222-332-2',
        type: 'professional'

},
    ], 
    current: null,
    filtered: null,
    };

    const [state, dispatch] = useReducer(contactReducer, initialState)
// Add Contact

const addContact = contact =>{
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact})
}
//Delete Contact
const delContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id})

}

//Set Contact

const setCurrent = (contact) => {
    dispatch({type: SET_CURRENT, payload: contact})
}
//Clear contact

const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT})
} 
//update Contact

const updateContact = (contact) => {
dispatch({type: UPDATE_CONTACT, payload: contact})
}
//filter contact

const filterContact = (text) => {
    dispatch({type: FILTER_CONTACTS, payload: text})
}
//clear filter
const clearFilter = () => {
    dispatch({type: CLEAR_FILTER})
}

return (
    <ContactContext.Provider 
    value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        delContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
    }}>
{ props.children }
    </ContactContext.Provider>
)
}

export default ContactState;
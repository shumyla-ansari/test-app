import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext'


const ContactForm = () => {
const contactContext = useContext(ContactContext)

const { addContact, current,  clearCurrent, updateContact } = contactContext;


    const [ contact, setContact ] = useState({
        name: '', 
        email: '',
        phone: '',
        type: 'personal'
    })


useEffect(() => {
    if(current !== null){
        setContact(current)
    } else {
        setContact({
            name: '', 
            email: '',
            phone: '',
            type: 'personal'
        })
    }

}, [contactContext, current])

    const { name, email, phone, type } = contact;

    const onChange = e => {
        const { name, value } = e.target
        setContact(prevValue => ({ ...prevValue, [name] : value}))}

    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addContact(contact);
        } else {
            updateContact(contact)

        }
        
      
        setContact({
            name: '', 
        email: '',
        phone: '',
        type: 'personal'
        })
    }  
    
    const clearAll = () => {
        clearCurrent();
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>{current ? 'Edit Contact' : 'Add contact'}</h2>
            <input onChange={onChange} type="text" placeholder="name" name="name" value ={name}/>
            <input onChange={onChange} type="email" placeholder="email" name="email" value ={email}/>
            <input onChange={onChange} type="text" placeholder="phone" name="phone" value ={phone}/>
                      <h5>Contact type</h5>
                      <input onChange={onChange} type="radio" name="type" value ="personal" checked={type === 'personal'}/> Personal{' '}
                      <input onChange={onChange} type="radio" name="type" value ="professional" checked={type === 'professional'}/> Professional{' '}
      <div>
          <input type="submit" value={current? "Update contact":"Add contact"} className="btn btn-primary btn-block"/>
          {current && <button className="btn btn-primary btn-block" onClick={clearAll}>Clear</button>}
      </div>
            
        </form>
    )
}

export default ContactForm

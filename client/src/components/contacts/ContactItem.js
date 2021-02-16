import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact, current }) => {

    const contactContext = useContext(ContactContext)
    const {delContact,  setCurrent, clearCurrent} = contactContext


    const { id, name, email, phone, type } = contact;


    const deleteContact = () => {
        delContact(id);
        clearCurrent();

    }

    const editContact = () => {
        setCurrent(contact)
    }
    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">{name}{' '} 
            <span style={{ float: 'right '}} className={'badge '+ 
            (type === 'professional'? 
            'badge-success' : 'badge-primary')}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </span></h3>
            <ul className='list'>
                {email && (<li>
                    <i className = 'fas fa-envelope-open'></i>{email}
                </li>)}
                {phone && (<li>
                    <i className = 'fas fa-phone'></i>{phone}
                </li>)}

                <button  className='btn btn-dark btn-sm' onClick={editContact}> Edit</button>
                <button className='btn btn-danger btn-sm' onClick={deleteContact} > Delete</button>
            </ul>
        </div>
    )
}

ContactItem.propTypes = {
    contacts: PropTypes.object.isRequired,
}

export default ContactItem

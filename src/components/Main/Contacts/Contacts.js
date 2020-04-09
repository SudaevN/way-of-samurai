import React from "react";
import classes from './Contacts.module.css';
import Contact from "./Contact/Contact";


const Contacts = (props) => {

    let contactsElements = props.contactsData.map( contact => <Contact key={contact.id} id={contact.id} name={contact.name} status={contact.status} picUrl={contact.picUrl}/> )
    return (
        <div>
            {contactsElements}
        </div>
    )
}

export default Contacts;
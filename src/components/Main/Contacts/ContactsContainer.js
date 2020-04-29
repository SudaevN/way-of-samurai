import React from "react";
import Contact from "./Contact/Contact";
import Contacts from "./Contacts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        contactsElements: state.contactsData.map(contact => <Contact key={contact.id} id={contact.id} name={contact.name} status={contact.status} picUrl={contact.picUrl}/>)
    }
};

const ContactsContainer = connect(mapStateToProps)(Contacts)

export default ContactsContainer;
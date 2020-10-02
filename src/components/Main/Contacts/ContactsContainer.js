import React from "react";
import Contact from "./Contact/Contact";
import Contacts from "./Contacts";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        contactsElements: state.contactsData.map(contact => <Contact key={contact.id} id={contact.id} name={contact.name} status={contact.status} picUrl={contact.picUrl}/>)
    }
};

const ContactsContainer = connect(mapStateToProps)(Contacts)

export default compose(
  connect(mapStateToProps),
  withRouter,
  withAuthRedirect
)(ContactsContainer);
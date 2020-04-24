import React from "react";
import Contact from "./Contact/Contact";
import StoreContext from "../../../storeContext";
import Contacts from "./Contacts";


const ContactsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let contactsElements = store.getState().contactsData.map( contact => <Contact key={contact.id} id={contact.id} name={contact.name} status={contact.status} picUrl={contact.picUrl}/> )

                    return <Contacts contactsElements={contactsElements}/>
                }
            }
        </StoreContext.Consumer>
    )
};

export default ContactsContainer;
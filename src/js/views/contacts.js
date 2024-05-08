import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';



const Contacts = () => {
  const { store, actions } = useContext(Context);
  
  
  useEffect( () => {
    actions.getContactList();
  },[])
    


  return (
    <div>
      <ul>
      {store.contacts.map((contact)=>(<li>{contact.name}</li>))}
      {store.contacts.map((contact)=>(<li>{contact.phone}</li>))}
      {store.contacts.map((contact)=>(<li>{contact.email}</li>))}
      {store.contacts.map((contact)=>(<li>{contact.address}</li>))}
      </ul>
    </div>
  )
}

export default Contacts;

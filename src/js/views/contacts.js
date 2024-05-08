import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';


const Contacts = () => {
  useEffect( () => {
    const {stories, actions} = useContext(Context);
    actions.getContactsList();
  },[])
    
 

  return (
    <div>
      <ul>
        {}
      </ul>
    </div>
  )
}

export default Contacts;

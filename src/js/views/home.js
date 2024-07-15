import React, { useContext,useEffect,useState } from "react";
// import {CardName} from "../component/card";
import "../../styles/home.css";
import { Context } from "../store/appContext";


    const Home = () => {
	const {store,actions} = useContext(Context);
	


	useEffect (() =>{
        const fetchContacts = async () => {
            await actions.getContacts(); 
        }
		fetchContacts();
	}, [])
	
	
	return (
	<div className="container">
			<ul>
        {store.contacts.map((contact) => 
			 (
				<li key={contact.id} style={{ border: "2px solid black", borderRadius: "5px", padding: "10px", margin: "10px", width: "300px" }}>
					<div>
						<strong style={{ fontSize: "18px" }}>Name:</strong> {contact.name}
					</div>
					<div>
						<strong style={{ fontSize: "18px" }}>Phone:</strong> {contact.phone}
					</div>
					<div>
						<strong style={{ fontSize: "18px" }}>Email:</strong> {contact.email}
					</div>
					<div>
						<strong style={{ fontSize: "18px" }}>Address:</strong> {contact.address}
					</div>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<button className="btn btn-danger mt-2" onClick={()=> {
						actions.deleteContacts(contact.id)
						actions.getContacts()
						}}>Delete</button>
                        <button className="btn btn-danger mt-2" onClick={()=> {
						actions.updateContacts(contact.id)
						actions.getContacts()
						}}>Update</button>
					</div>
				</li>
			))}
		</ul>
	</div>
	)
};

export default Home
	
		

	
	

 
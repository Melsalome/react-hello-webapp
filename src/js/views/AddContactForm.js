import React, { useState, useContext } from 'react'
import { Navigate, useNavigate, navigate } from 'react-router';
import ContactCard from '../component/contactCard';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const AddContactForm = () => {

    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({...prevData, [name]: value})) 
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await actions.addNewContact(formData);
        navigate('/contacts')
    }


   


       return (
        <div className="add-contact-form container text-center mt-5">
            <h2>Add a New Contact</h2>
            <form >
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" onSubmit={handleFormSubmit}>
                    Save
                </button>
                <Link to="/contacts">
                    <span className="ms-2">
                        <i className="fa-solid fa-arrow-left"></i> Or go back to Contacts
                    </span>
                </Link>
            </form>
        </div>
    
)}

export default AddContactForm;

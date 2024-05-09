import ContactDeleteOperationsDispatch from "./contactDeleteOperationsDispatch";
import ContactOperationsDispatch from "./contactOperationsDispatch";
import CreateContactOperationsDispatch from "./createContactOperationsDispatch";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: 
				[{
				name:"Odin",
				lastName: "Odin",
				phoneNumber:"555-555",
				email:"odin@gmail.com",
				address:"whatever street"
			}],
		},
		actions: {
		
			getContactList: async () => {
				// const {contacts} = await ContactOperationsDispatch.get();
				const store = getStore();
				setStore({...store, contacts:contacts})
			},
		

			addNewContact: async () => {
			const { contactData } = await CreateContactOperationsDispatch.post();
			const store = getStore();
			setStore({...store, contacts: contactData})
			},

			deleteContact: async () => {
				const {contactId} = await ContactDeleteOperationsDispatch.delete();
				const store = getStore();
				setStore({...store, contact})
			}
		}
	};
};

export default getState;

import ContactOperationsDispatch from "./contactOperationsDispatch";


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
				phone:"555-555",
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
			// getAgendas: async () => {
			// const agendas = await getAllAgendas();
			// const store = getStore();
			// setStore({...store, agendaOriginal: agendas})
			// },

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;


const ContactDeleteOperationsDispatch = {
    get: async (contactId) => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendaMelisa/contacts/${contactId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        return await response.json()
    }
}

export default ContactDeleteOperationsDispatch ;


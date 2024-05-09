
const ContactDeleteOperationsDispatch = {
    get: async () => {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/agendaMelisa/contacts', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        return await response.json()
    }
}

export default ContactDeleteOperationsDispatch ;


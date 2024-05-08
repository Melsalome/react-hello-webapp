
const ContactOperationsDispatch = {
    get: async () => {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/agendaMelisa/contacts', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        return await response.json()
    }
}

export default ContactOperationsDispatch;
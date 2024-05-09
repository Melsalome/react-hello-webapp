

const CreateContactOperationsDispatch = {
    post: async (contactData) => {
    const response = await fetch ('https://playground.4geeks.com/contact/agendas/agendaMelisa/contacts', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(contactData)
    })
    return await response.json();
}
}

export default CreateContactOperationsDispatch;


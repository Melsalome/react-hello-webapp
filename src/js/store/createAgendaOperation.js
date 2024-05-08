

const createAgendaOperations = {
    post: async (slug = 'agendaMelisa') => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'} ,
            body: JSON.stringify({"slug": "agendaMelisa"})
        })
        return await response.json();
    }
}

export default createAgendaOperations;
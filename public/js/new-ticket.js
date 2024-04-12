

const currentTicketLabel = document.querySelector('span')
const createTicketBtn = document.querySelector('button')


const getLastTicket = async()=>{
    const lastTicket = await fetch('/api/ticket/last').then(resp => resp.json())
    currentTicketLabel.innerHTML = lastTicket
}

const createTicket = async()=>{
    const newTicket = await fetch('/api/ticket',{
        method: 'POST'
    }).then(resp => resp.json())
    currentTicketLabel.innerText = newTicket.number;
}

createTicketBtn.addEventListener('click',createTicket)
getLastTicket()
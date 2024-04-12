import { UuidAdapter } from "../../config/uuidAdapter";
import { Ticket } from "../../domain/interfaces/ticket";



export class TicketService {


    private readonly tickets:Ticket[]=[
        {id: UuidAdapter.v4(), number:1, createdAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:2, createdAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:3, createdAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:4, createdAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:5, createdAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:6, createdAt: new Date(), done: false},
    ]


    public get pendingTickets():Ticket[]{
        return this.tickets.filter(ticket=>!ticket.handleAtDesk);
    }

    public lastTicketNumber(): number{
        return this.tickets.length > 0 ? this.tickets.at(-1)!.number : 0
    }

    public createTicket(){
        const ticket:Ticket = {
            id: UuidAdapter.v4(),
            number: this.lastTicketNumber() + 1,
            createdAt: new Date(),
            done: false,
            handleAtDesk: undefined,
            handleAt: undefined
        }

        this.tickets.push(ticket)

        //Todo: Añadir al WS
        return ticket
    }
    
    public drawTicket (desk: string) {
        const ticket = this.tickets.find(ticket => !ticket.handleAtDesk)

        if (!ticket) {
            return {status: 'error', message: 'No hay tickets pendientes'}
        }

        ticket.handleAtDesk = desk
        ticket.handleAt = new Date()

        //Todo: Añadir al WS

        return {status: 'ok', ticket}
    }

    public finishTicket(ticketId: string){
        const ticket = this.tickets.find(ticket => ticket.id === ticketId)
            
        if(!ticket) return {status: 'error', message: 'Ticket no encontrado'}

        this.tickets.map(ticket => {
            if (ticket.id === ticketId) ticket.done = true
            return ticket
        })

        return {status: 'ok'}
    }

    
    
}
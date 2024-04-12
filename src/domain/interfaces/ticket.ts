

export interface Ticket {
    id: string;
    number: number;
    createdAt: Date;
    handleAtDesk?: string; // Me va a indicar en que escritorio se encuentra el llamado del ticket
    handleAt?: Date; // Me va a indicar cuando se crea el ticket
    done: boolean;
}
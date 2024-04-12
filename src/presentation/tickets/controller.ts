import { Request, Response } from "express";



export class TicketController {

    //DI - WssService
    constructor(){}

    public getTickets = async (req: Request, res: Response) => {
        res.json('get tickets');
    }
    public getLastTickets = async (req: Request, res: Response) => {
        res.json('get lastTicketsNumber');
    }
    public getPendingTickets = async (req: Request, res: Response) => {
        res.json('pending tickets');
    }
    public createTicket = async (req: Request, res: Response) => {
        res.json('Create ticket');
    }
    public drawTicket = async (req: Request, res: Response) => {
        res.json('draw ticket');
    }
    public ticketFinished = async (req: Request, res: Response) => {
        res.json('Finished ticket');
    }
    public workingOn = async (req: Request, res: Response) => {
        res.json('workingOn');
    }
}
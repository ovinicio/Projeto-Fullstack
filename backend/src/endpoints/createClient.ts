import { Request, Response } from "express";
import connection from "../database/connections";

export const createClient = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const name = req.body.name;
        if (!name) {
            throw new Error("Nome inválido!!!");            
        }
        await connection("Case_Clients").insert({
            name
        })
        res.status(200).send("Client criado com sucesso!")

    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
}

export default createClient;
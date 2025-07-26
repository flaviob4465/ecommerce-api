import { ErrorBase } from "./base.error";

export class ValdidationError extends ErrorBase{
    constructor (message:string){
        super(400, message)
    }
}
import RZClient from '../Client'
import { Message } from 'revolt.js/dist/maps/Messages'

export interface IRun {
    (
        client: RZClient,
        message: Message,
        args: string[]
    ): any | Promise<any>
}

export interface ICommandData {
    name: string,
    description?: string,
    aliases?: string | string[]
}

export default interface ICommand {
    data: ICommandData,
    run: IRun
}
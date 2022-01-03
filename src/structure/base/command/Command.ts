import ICommand, { ICommandData } from '../../interfaces/ICommand'
import RZClient from '../../Client'
import { Message } from 'revolt.js/dist/maps/Messages'

class Command implements ICommand {
    public data!: ICommandData

    constructor(data?: ICommandData) {
        if (data) this.data = data
    }

    public run(client: RZClient, message: Message, args: string[]): any {
        console.warn(`${this.data.name} has no run method!`)
    }
}

export default Command
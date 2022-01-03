import { Class } from 'type-fest'
import { ICommandData } from '../../interfaces/ICommand'
import Command from './Command'

let command = (data: ICommandData) => {
    let main = (Target: Class<Command>) => {
        return class extends Target {
            constructor(...args: any[]) {
                super(data, ...args)
            }
        }
    }

    return main
}

export default command
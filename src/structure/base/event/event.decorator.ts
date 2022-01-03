import { Class } from 'type-fest'
import { IEventData } from '../../interfaces/IEvent'
import Event from './Event'

let event = (data: IEventData) => {
    let main = (Target: Class<Event>) => {
        return class extends Target {
            constructor(...args: any[]) {
                super(data, ...args)
            }
        }
    }

    return main
}

export default event
import IEvent, { IEventData, Run } from '../../interfaces/IEvent'

class Event implements IEvent {
    public data!: IEventData

    constructor(data?: IEventData) {
        if (data) this.data = data
    }

    public run: Run = () => {
        console.warn(`${this.data.name} has no run method!`)
    }
}

export default Event
import RZClient from "../Client";

export type Run = (
    client: RZClient,
    ...args: any[]
) => any

export interface IEventData {
    name: string,
    once?: boolean
}

export default interface IEvent {
    data: IEventData,
    run: Run
}
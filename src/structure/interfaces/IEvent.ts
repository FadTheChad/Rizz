import RZClient from "../Client";

type Run = (
    client: RZClient,
    ...args: any[]
) => any

export default interface IEvent{
    name: string
    once?: boolean,
    run: Run
}
import RZClient from "../Client";
import fs from 'fs'
import { Class } from 'type-fest'
import Event from '../base/event/Event'

const handler = async (client: RZClient) => {
    const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js') || file.endsWith('ts'))
    console.log('\nLoading events...\n')

    for (const file of eventFiles) {
        const req = require(`../../events/${file}`)

        const EventClass: Class<Event> = req.default
        const event = new EventClass()

        const { data } = event

        console.log(`\t${data.name} event has been loaded`)

        if (data.once) {
            client.once(data.name, (...args) => event.run(client, ...args))
        } else {
            client.on(data.name as any, (...args: any[]) => event.run(client, ...args))
        }
    }
}

export default handler
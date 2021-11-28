import IEvent from '../structure/interfaces/IEvent'
import { Message } from 'revolt.js/dist/maps/Messages'
import config from '../../config.json'

const event: IEvent = {
    name: 'message',
    run: (client, message: Message) => {
        if (message.author?.bot || typeof message.content !== 'string' || !message.content.startsWith(config.prefix)) return

        let args: string[] = message.content.slice(config.prefix.length).split(/ +/g)

        let commandName = args.shift()?.toLowerCase()

        let command = client.commands.get(commandName as string) ?? client.commands.find(c => {
            if (typeof c.aliases === 'string') c.aliases = [c.aliases]

            return !!c.aliases && c.aliases.includes(commandName as string)
        })

        if (!command) return

        try {
            command.run(client, message, args)
        } catch (err) {
            console.error(err)
        }
    }
}

export default event
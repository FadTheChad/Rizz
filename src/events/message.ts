import Event from '../structure/base/event/Event'
import event from '../structure/base/event/event.decorator'
import { Message } from 'revolt.js/dist/maps/Messages'
import config from '../../config.json'
import { Run } from '../structure/interfaces/IEvent'

@event({ name: 'message' })
class MessageEvent extends Event {
    public run: Run = (client, message: Message) => {
        if (message.author?.bot || typeof message.content !== 'string' || !message.content.startsWith(config.prefix)) return

        let args: string[] = message.content.slice(config.prefix.length).split(/ +/g)

        let commandName = args.shift()?.toLowerCase()

        let command = client.commands.get(commandName as string) ?? client.commands.find(c => {
            const { data } = c
            if (typeof data.aliases === 'string') data.aliases = [data.aliases]

            return !!data.aliases && data.aliases.includes(commandName as string)
        })

        if (!command) return

        try {
            command.run(client, message, args)
        } catch (err) {
            console.error(err)
        }
    }
}

export default MessageEvent
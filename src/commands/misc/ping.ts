import { IRun } from '../../structure/interfaces/ICommand'
import RZEmbed from '../../utils/RZEmbed'
import command from '../../structure/base/command/command.decorator'
import Command from '../../structure/base/command/Command'

@command({
    name: 'ping',
    description: 'sends ping',
    aliases: 'test',
})
class PingCommand extends Command {
    public run: IRun = (client, message, args) => {
        let embed = new RZEmbed()
            .setTitle('Pong!')
            .addField({
                name: 'API Latency',
                value: client.websocket.ping?.toString() ?? 'UNKNOWN'
            })
            .setColour('#FFFF00')

        message.channel?.sendMessage(embed.toString())
    }
}

export default PingCommand
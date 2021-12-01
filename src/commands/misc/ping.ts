import ICommand from '../../structure/interfaces/ICommand'
import RZEmbed from '../../utils/RZEmbed'

const command: ICommand = {
    name: 'ping',
    description: 'sends ping',
    aliases: 'test',
    async run (client, message, args) {
        let embed = new RZEmbed()
            .setTitle('Pong!')
            .addField({
                name: 'API Latency',
                value: client.websocket.ping?.toString() ?? 'UNKNOWN'
            })
            .setColour('#FFFF00')

        console.log(embed)
        message.channel?.sendMessage(embed.toString())
    }
}

export default command
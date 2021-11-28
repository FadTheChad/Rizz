import ICommand from '../../structure/interfaces/ICommand'
import RZEmbed from '../../utils/RZEmbed'

const command: ICommand = {
    name: 'ping',
    description: 'sends ping',
    aliases: 'test',
    async run (client, message, args) {
        let embed = new RZEmbed()

        embed.setTitle('Title')
        embed.setDescription('this is the description and shit')
        embed.addFields([{
            name: 'Field 1',
            value: 'value 1'
        }, {
            name: 'Field 2',
            value: 'value 2'
        }, {
            name: 'Field 3',
            value: 'value 3'
        }])

        console.log(embed)
        message.channel?.sendMessage(embed.toString())
    }
}

export default command
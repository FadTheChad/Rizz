import ICommand from '../../structure/interfaces/ICommand'

const command: ICommand = {
    name: 'ping',
    description: 'sends ping',
    aliases: 'test',
    async run (client, message, args) {
        message.channel!.sendMessage(`Pong!\nAPI Latency: ${client.websocket.ping} ms`)
    }
}

export default command
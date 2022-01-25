import { readdirSync } from 'fs'
import RZClient from '../Client'
import { Class } from 'type-fest'
import Command from '../base/command/Command'

const handler = async (client: RZClient) => {
    for (const folder of client.categories) {
        if (folder === 'context') continue

        const commandFiles = readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('js') || file.endsWith('ts')) // <= what could this possibly mean!?!?!?!
        console.log(`\nSearching ${folder} commands...\n`)

        for (const file of commandFiles) {
            const req = require(`../../commands/${folder}/${file}`)

            const CommandClass: Class<Command> = req.default

            const command = new CommandClass()

            client.commands.set(command.data.name, command)

            console.log(`\t${file} has been loaded!`)
        }
    }
}

export default handler
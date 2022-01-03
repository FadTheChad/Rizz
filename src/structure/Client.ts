import { Client, ClientOptions } from 'revolt.js'

import Collection from '@discordjs/collection'
import { readdirSync } from 'fs'

import IConfig from './interfaces/IConfig'

import cmdHandler from './handlers/command'
import eventHandler from './handlers/event'
import Command from './base/command/Command'

class RZClient extends Client {
    private _config: IConfig
    public categories = readdirSync('./src/commands')
    public commands = new Collection<string, Command>()

    public loadCommands = cmdHandler
    public loadEvents = eventHandler

    constructor(config: IConfig, options?: ClientOptions) {
        super(options)

        this._config = config
    }

    public async start() {
        console.log('Starting...')
        this.loadCommands(this)
        this.loadEvents(this)
        await this.loginBot(this._config.token)
    }
}

export default RZClient
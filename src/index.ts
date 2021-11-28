import _config from '../config.json'
import IConfig from './structure/interfaces/IConfig'
const config: IConfig = _config

import RZClient from './structure/Client'
import { Message } from 'revolt.js/dist/maps/Messages'

const client = new RZClient(config)

client.start()
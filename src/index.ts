import _config from '../config.json'
import IConfig from './structure/interfaces/IConfig'
const config: IConfig = _config

import RZClient from './structure/Client'

const client = new RZClient(config)

client.start()
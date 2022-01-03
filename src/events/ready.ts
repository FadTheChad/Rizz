import Event from '../structure/base/event/Event'
import event from '../structure/base/event/event.decorator'
import { Run } from '../structure/interfaces/IEvent'

@event({ name: 'ready' })
class ReadyEvent extends Event {
    public run: Run = (client) => {
        console.log(`\nLogged in as ${client.user?.username} and ready to operate!`)
    }
}

export default ReadyEvent
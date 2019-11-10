const EventEmitter = require('events');

//create class
class FirstEmitter extends EventEmitter{ }

//Init Object
const firstEmitter = new FirstEmitter();

//Event listener
firstEmitter.on('event', () => console.log('Event Fired'));

//Init event
firstEmitter.emit('event');
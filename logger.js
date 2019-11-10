const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');


class Logger extends EventEmitter{
    log(msg){
        //Call event
        this.emit('message', {id: uuid.v4(), msg:msg})
    }
}

const logger = new Logger();

logger.on('message', (data) => {
        fs.appendFile(path.join(__dirname, 'appendIds.txt'), `ID: ${data.id}\n  msg: ${data.msg}\n`, err => {
            if (err) throw err;
            console.log(data);
        });
});

logger.log('hello');
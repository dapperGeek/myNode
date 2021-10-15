var url = 'http://logger.io/log';

function log(message)
{
    // SEND HTTP REQUEST
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;

console.log(module);
const os = require('os')
const currentOs = {
    'OsType' : os.type(),
    'OS release' : os.release(),
    'Uptime' : os.uptime(),
    'current User' : os.userInfo()
}

console.log(currentOs)
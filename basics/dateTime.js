let dateTime = new Date()
console.log(dateTime)
console.table([dateTime.toString(),dateTime.toUTCString(),dateTime.getHours(),dateTime.toJSON()])

const tstrap = Date.now()
console.table([tstrap])
const net = require('net')
const server = net.createServer()

// const server = require('net').createServer()
const clientList = []
let clientId = 1

const logEntry = () => console.log('Hey new client came in')
const welcomeMessage = (client) => client.write("Welcome to the spacebar \n")

const broadcastNewcomer = (clientList) => {
  for (const client of clientList) {
    client.write("New client came in! \n")
  }
}

const broadcast = (clientList, data) => {
  for (const client of clientList) {
    client.write(`${data} \n`)
  }
}

const broadcastToEverybodyButMeBecauseIKnowWhatIWrote = (clientList, data, currentClientId, isBigBrother) => {
  for (const client of clientList) {
    if (client.id !== currentClientId) {
      client.write(`${data} \n`)
    }
  }
  if (isBigBrother) {
    console.log(typeof data)
    console.log(data === "🦜1: Cool server")
    if (data === "🦜1: Cool server") {
      broadcast(clientList, 'Thank you, I\'m not listening by the way')
    }
  }
}

server.on('connection', logEntry)
server.on('connection', welcomeMessage)
server.on('connection', client => {
  client.setEncoding('utf-8')
  client.id = clientId
  clientId++
  clientList.push(client)


  broadcastNewcomer(clientList)
  // broadcast(clientList, "Hey somebody came in")

  // client.on('data', data => broadcast(clientList, `🦜${client.id}: ${data}`))
  client.on('data', data => broadcastToEverybodyButMeBecauseIKnowWhatIWrote(clientList, `🦜${client.id}: ${data}`, client.id, true))
})

server.listen(9001, () => console.log('Server is ready !'))
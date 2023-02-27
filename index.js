const { Collection } = require('@discordjs/collection')
const { Client } = require('discord.js')
const keepAlive = require('./server')
const fs = require('fs')
require('dotenv').config()

// Discord Bot @ Client

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_VOICE_STATES",
        "DIRECT_MESSAGE_REACTIONS"
    ]
})

// Discord Bot @ Command Handler => Self Explanatory

const commandFolders = fs.readdirSync(`./commands`)
const commands = []

client.commands = new Collection()

for (const folder of commandFolders) {
    const commandFiles = fs
        .readdirSync(`./commands/${folder}`)
        .filter((file) => file.endsWith('.js'))
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`)
        commands.push(command.data.toJSON())
        client.commands.set(command.data.name, command)
    }
}

// Discord Bot @ Event Handler => Event: client.on("ready"), etc

const eventFolders = fs.readdirSync(`./events`)

for (const folder of eventFolders) {
    const eventFiles = fs
        .readdirSync(`./events/${folder}`)
        .filter((file) => file.endsWith('.js'))
    for (const file of eventFiles) {
        const event = require(`./events/${folder}/${file}`)

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, commands))
        } else {
            client.on(event.name, (...args) => event.execute(...args, commands))
        }
    }
}

// Discord Bot @ Rest Handler => Rest: discord-temp-channel, etc.

const restFolders = fs.readdirSync(`./rests`)

for (const folder of restFolders) {
    const restFiles = fs
        .readdirSync(`./rests/${folder}`)
        .filter((file) => file.endsWith('.js'))
    for (const file of restFiles) {
        const restAsset = require(`./rests/${folder}/${file}`)

        restAsset.execute(client)
    }
}

// Discord Bot @ Login

client.login(process.env.LH_SECRET)
keepAlive()
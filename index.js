const { Client , GatewayIntentBits, Partials, Collection, InteractionType, EmbedBuilder, ButtonBuilder, WebhookClient } = require ("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const mongoose = require("mongoose");
const Discord = require('discord.js');
const express = require("express");
const app = express();
const path = require("path");
const flash = require('connect-flash');
const session=require('express-session');
const passport=require('passport')
const db = require("quick.db");
const moment = require("moment");
const client = new Client({
    intents: [
      
        "Guilds",
        "GuildPresences",
        "GuildMembers",
        "GuildBans",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
     
      "GuildVoiceStates",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "DirectMessages",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "MessageContent"
        
    ],
});
// Bot Congfig
client.config = require("./config.json");
require("./settings.js")(client)

// Bot Congfig


// Bot Data
mongoose.set('strictQuery',false)
mongoose.connect(`${client.config.data}`, {

  useNewUrlParser: true, 

useUnifiedTopology: true 
});


mongoose.connection.on("connected", () => {
	console.log("[LOG] Connected to data");
});

mongoose.connection.on("error", () => {
	console.error("[LOG] Connection Error!");
});
// Bot Data


// Command Data
// Command Data





client.commands = new Collection();
client.buttons = new Collection();


client.login(client.config.token).then(() => {
}).catch((err) => console.log(err));
//app.listen(3000);



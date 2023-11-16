//file: index.js
const express = require("express");
const app = express();
const port = 3000;
app.get("/", async (req, res) => { //when the user is on the home directory,
  console.log("User is on home page"); //log out this message to the console
  res.send("Hello World!"); //send response to client to prevent timeout errors
});
app.listen(port, () => { //run the server
  console.log(`Example app listening on port ${port}`);
});

class YoutubeChannel{
    constructor(name){
        this.name = name
        this.subscribers = []
    }

    subscribe(sub){
        this.subscribers.push(sub)
    }

    notify(event){
        this.subscribers.forEach(subscriber => subscriber.sendNotification(this.name, event))
    }
}

class YoutubeUser{
    constructor(name){
        this.name = name
    }

    sendNotification(channel, event){
        console.log(`Usuário ${this.name} recebeu uma notificaçãoo de ${channel}: ${event}`)
    }
}

const channel = new YoutubeChannel("thiagotolotti")

channel.subscribe(new YoutubeUser("sub1"))
channel.subscribe(new YoutubeUser("sub2"))
channel.subscribe(new YoutubeUser("sub3"))

channel.notify("A new video released") //Notifica todos os usuários
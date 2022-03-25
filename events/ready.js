const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} is up and ready to go!`);
    //require("../controller/autoMeme")(client)

    // const arrayOfStatus = [
    //     `Over ${client.guilds.cache.size} servers!`,
    //     `gh beta`,
    //     `fake CGH`
    //   ];
    
    //   let index = 0;
    //   setInterval(() => {
    //     if (index === arrayOfStatus.length) index = 0;
    //     const status = arrayOfStatus[index];
    //     //console.log(status);
    client.user.setActivity("Rickroll", {
      type: "STREAMING",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  });
      //   index++;
      // }, 6000); //in ms
    })
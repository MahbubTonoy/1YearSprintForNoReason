const EventsEmitter = require("events");
const Emitter = new EventsEmitter();

Emitter.on("test", ()=>{
  console.log("Test");
});

Emitter.emit("test");
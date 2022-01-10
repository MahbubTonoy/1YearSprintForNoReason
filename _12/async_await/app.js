const promise = new Promise((resolve, reject) => {
 let meetingOngoing = true;
 if(meetingOngoing) {
  reject(new Error("an  Meeting is already running. please wait intil the meeting has been finished"));
 }
 else {
  resolve({
   name: "A new Meeting",
   topic: "Are we dead or alive",
   place: "in space"
  });
 }
})

promise
 .then((data)=>{
  console.log(`an urgent meeting are currently hosting in ${data.place} about "${data.topic}"`);
 })
 .catch((err)=> {
  console.log(err.message);
 })
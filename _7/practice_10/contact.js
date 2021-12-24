module.exports = class Contact {
 constructor(list) {
  this.list = list;
 }
 sortedList() {
  this.list.sort((a,b)=>{
   if(a.name > b.name) return 1;
   if(a.name < b.name) return -1;
  });
  return this.list.reduce((acc, cur) => {
   let char = cur.name.charAt(0).toUpperCase();
   if (acc[char]) {
    acc[char].push(cur);
   }
   else {
    acc[char] = [cur];
   }
   return acc;
  }, {});
 }
};

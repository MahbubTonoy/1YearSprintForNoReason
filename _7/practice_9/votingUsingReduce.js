let votes = [
 'Java',
 'Java',
 'Javascript',
 'Python',
 'C',
 'Python',
 'C++',
 'C++'
]

let totalVotes = votes.reduce((acc, cur)=>{
 if(acc[cur]) {
  acc[cur]++;
 }
 else {
  acc[cur] = 1;
 }
 return acc;
}, {});

console.log(totalVotes);
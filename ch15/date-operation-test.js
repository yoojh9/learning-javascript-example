const d1 = new Date(1990,8,12);
const d2 = new Date(1989,0,21);

const msDiff = d1-d2;
console.log(msDiff);  // 51753600000

const dayDiff = msDiff/1000/60/60/24;
console.log(dayDiff); // 599 days

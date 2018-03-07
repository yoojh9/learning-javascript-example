const d = new Date(Date.UTC(1990,8,12));

console.log(d.getFullYear());
console.log(d.getMonth()); // 8 - 9월
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

// UTC 기준
console.log(d.getUTCFullYear());
console.log(d.getUTCMonth()); // 8 - 9월
console.log(d.getUTCDate());
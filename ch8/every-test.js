const arr = [4,6,16,36]
arr.every(x=>x%2==0);    // true
arr.every(x=>Number.isInteger(Math.sqrt(x)));    // false
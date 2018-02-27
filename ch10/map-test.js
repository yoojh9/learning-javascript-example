const u1 = { name: 'Alice' };
const u2 = { name: 'Jeonghyun' };
const u3 = { name: 'Jake' };
const u4 = { name: 'Fin' };

const userRoles = new Map();

userRoles.set(u1, 'User')
        .set(u2, 'Admin')
        .set(u3, 'User');

userRoles.get(u2);	// "Admin"
userRoles.has(u1);	// true
userRoles.get(u4);	// undefined
userRoles.has(u4);	// false

userRoles.size;  // 3

console.log("--keys()--")
for(let u of userRoles.keys()){
  console.log(u.name);
}

console.log("--values()--")
for(let r of userRoles.values()){
  console.log(r)
}

console.log("--entries()--")
for(let ur of userRoles.entries()){
  console.log(`${ur[0].name}: ${ur[1]}`);
}


// 맵도 분해(destruct)할 수 있다
console.log("--destruct ex.1--")
for(let [u,r] of userRoles.entries()){
  console.log(`${u.name}: ${r}`);
}

// entries()는 맵의 기본 이터레이터이다. 위의 코드는 아래와 같다
console.log("--destruct ex.2--")
for(let [u,r] of userRoles){
  console.log(`${u.name}: ${r}`);
}

userRoles.delete(u2);
console.log(userRoles.size);  // 2

userRoles.clear();
console.log(userRoles.size);  // 0

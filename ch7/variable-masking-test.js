{
  let x = { color : "blue"};
  let y = x;
  let z = 3;
  {
    let x = 5;
    console.log(x);	// 5
    console.log(y.color); // blue
    y.color = "red";
    console.log(z);	// 3
  }
    console.log(x.color);	// red
    console.log(y.color);	// red
    console.log(z);			// 3
}
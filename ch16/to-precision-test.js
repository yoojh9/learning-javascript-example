let x = 1000;
x.toPrecision();  // "1000"
x.toPrecision(5); // "1000.0"
x.toPrecision(4); // "1000"
x.toPrecision(3); // "1.00e+3"
x.toPrecision(2); // "1.0e+3"
x.toPrecision(1); // "1e+3"

x = 12.345;
x.toPrecision(6); // "12.3450"
x.toPrecision(5); // "12.345"
x.toPrecision(4); // "12.35"
x.toPrecision(3); // "12.4"
x.toPrecision(2); // "12"
x.toPrecision(1); // "1e+1"
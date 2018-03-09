const stuff = 
  'hight:   9\n' +
  'medium:   5\n' +
  'low:   2\n';

// "*"는 '숫자는 상관 없으며 없어도 된다는 의미'
const levels = stuff.match(/:\s*[0-9]/g);
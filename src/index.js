module.exports = function check(str, bracketsConfig) {
  const pairs = new Map(bracketsConfig);  
  let stack = [];
  
  for (let b of str) {    
    const last = stack[stack.length - 1];
    
    if (pairs.get(last) === b) {
      stack.pop();
      continue;
    }

    if (pairs.has(b)) {      
      stack.push(b);
      continue;
    } 
    return false;
  }
    
  return stack.length === 0;
}

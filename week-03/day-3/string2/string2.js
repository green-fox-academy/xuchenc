// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function remove(str) {
	var ch = str.charAt(0);
  if(str.length == 0){
    return str;
  }
  else if(ch == 'x') {
    return remove(str.substring(1));
  }
  return ch + remove(str.substring(1));
}

console.log(remove('xoxoxo'));

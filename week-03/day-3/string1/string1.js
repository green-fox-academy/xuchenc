// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function string(str) {
  var ch = str.charAt(0);
	if(str.length == 0){
    return str;
  }
	else if(ch == 'x'){
    return 'y' + string(str.substring(1));
  }
	return ch + string(str.substring(1));
}

console.log(string('xiyou'));
console.log(string('xuxuxuxxuu'));

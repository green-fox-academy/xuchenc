// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function adjacent(str) {
  if(str.length < 2){
    return str;
  }else{
    return str.charAt(0) + '*' + adjacent(str.substring(1));
  }

}

console.log(adjacent('qwer'));

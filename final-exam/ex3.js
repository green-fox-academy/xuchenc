function palindrome(string) {
  const re = /[^A-Za-z0-9]/g;
  const lowerCaseString = string.toLowerCase().replace(re, '');
  const reverseString = lowerCaseString.split('').reverse().join('');
  if (reverseString === lowerCaseString) {
    return ('the string is palindrome');
  }
  return ('the string is not palindrome');
}
console.log(palindrome('caraC'));
console.log(palindrome('c1    21C'));
console.log(palindrome('1 2 321'));
console.log(palindrome('22344'));
console.log(palindrome('cara    C'));

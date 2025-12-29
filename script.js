function nextPalindrome(num) {
  // convert input to number (prompt gives string)
  num = Number(num);

  // keep checking next numbers
  while (true) {
    num++; // move to next number

    // convert number to string
    let str = num.toString();

    // reverse the string
    let reversed = str.split('').reverse().join('');

    // check palindrome
    if (str === reversed) {
      return num;
    }
  }
}

// Do not change below code
const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));

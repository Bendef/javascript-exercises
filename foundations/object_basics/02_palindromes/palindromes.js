const palindromes = function (palindrome) {
  const acceptedChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanedPalindrome = palindrome
    .toLowerCase()
    .split("")
    .filter((character) => acceptedChars.includes(character))
    .join("");

  const result = cleanedPalindrome.split("").reverse().join("");
  return result === cleanedPalindrome;
};

// Do not edit below this line
module.exports = palindromes;

/*  Truncate String 

Truncate a string (first argument) if it is longer than the 
given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str; 
}
  
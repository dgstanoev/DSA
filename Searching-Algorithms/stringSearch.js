function stringSearch(str, pattern) {
  let matches = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    let substring = str.slice(i, i + pattern.length);
    if (substring === pattern) matches++;
  }
  return matches;
}

console.log(stringSearch('passjazzbetabamziiombeta', 'beta'));

function stringSearch2(string, pattern) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== string[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

stringSearch2('passjazzbetabamziiombeta', 'beta');
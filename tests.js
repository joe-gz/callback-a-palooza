var assert = require('assert');
require('./script.js');

//Testing for Question 2
try {
  assert.deepEqual(sortedWords, ['long', 'short', 'medium', 'lengthy', 'interminable']);
  console.log("Answer to question 2 is correct");
}
catch (e) {
  console.log("Answer to question 2 isn't correct yet.");
}

//Testing for Question 3
try {
  assert.deepEqual(sortedWords, ['interminable', 'lengthy', 'medium', 'short', 'long']);
  console.log("Answer to question 3 is correct");
}
catch (e) {
  console.log("Answer to question 3 isn't correct yet.");
}

//Testing for Question 4
try {
  assert.strictEqual(power2(4), 16);
  assert.strictEqual(power2(3), 9);
  assert.strictEqual(power3(2), 8);
  assert.strictEqual(power3(3), 27);
  console.log("Answer to question 4 is correct");
}
catch (e) {
  console.log("Answer to question 4 isn't correct yet.");
}

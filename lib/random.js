function randomNumber() {
    return Math.floor(Math.random() * 9 + 1);
}
// module.exports connects this file to random.test.js
module.exports = randomNumber;

//require the module that testing is against, using relative path of location
const randomNumber = require('../lib/random.js');

//requires 2 arguments
// argument 1 = a descriptive string stating what the outcomes are for this test
test('gets random number between 1 and 10', () => {
    // arguement 2 = call back fxn that runs the test, 
        // here () =>   through expect....
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});
const Potion = require('../lib/Potion.js');

// potions will store both name & value, so make it an object instead of a variable
test('creates a health potion object', () => {
    // use of 'new' create a new potion object
    const potion = new Potion('health');

    //name property = health
    expect(potion.name).toBe('health');

    // valute property = some number
    // expect.any method takes a constructor as an argument
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion = new Potion();
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});
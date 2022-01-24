const Potion = require('../lib/Potion.js');

// potions will store both name & value, so make it an object instead of a variable
test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});
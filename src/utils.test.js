const {
    isEmpty,
    isOpeningBracket,
    isClosingBracket,
    getOpeningBracket,
} = require('./utils');

test('is empty', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty([])).toBe(true);
});

test('opening brackets', () => {
    expect(isOpeningBracket('(')).toBe(true);
    expect(isOpeningBracket('[')).toBe(true);
    expect(isOpeningBracket('{')).toBe(true);
    expect(isOpeningBracket(')')).toBe(false);
    expect(isOpeningBracket(']')).toBe(false);
    expect(isOpeningBracket('}')).toBe(false);
});

test('closing brackets', () => {
    expect(isClosingBracket(')')).toBe(true);
    expect(isClosingBracket(']')).toBe(true);
    expect(isClosingBracket('}')).toBe(true);
    expect(isClosingBracket('(')).toBe(false);
    expect(isClosingBracket('[')).toBe(false);
    expect(isClosingBracket('{')).toBe(false);
});

test('get opening brackets', () => {
    expect(getOpeningBracket(')')).toBe('(');
    expect(getOpeningBracket(']')).toBe('[');
    expect(getOpeningBracket('}')).toBe('{');
});

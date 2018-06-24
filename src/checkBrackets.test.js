const checkBrackets = require('./checkBrackets');

test('no mistakes in brackets', () => {
    expect(checkBrackets('{[()]}', true)).toBe(null);
    expect(checkBrackets('{}[]()', true)).toBe(null);
    expect(checkBrackets('{()}[{}]', true)).toBe(null);
    expect(checkBrackets('[[[]]]{}', true)).toBe(null);
    expect(checkBrackets('()({()})', true)).toBe(null);
});

test('first unmatched closing bracket', () => {
    expect(checkBrackets(']()', true)).toBe(']');
    expect(checkBrackets('()[}', true)).toBe('}');
    expect(checkBrackets('([)', true)).toBe(')');
    expect(checkBrackets('(((][()', true)).toBe(']');
    expect(checkBrackets('[{]()', true)).toBe(']');
});

test('first unmatched opening bracket', () => {
    expect(checkBrackets('{}([]', true)).toBe('(');
    expect(checkBrackets('{[]()', true)).toBe('{');
    expect(checkBrackets('{}(()', true)).toBe('(');
    expect(checkBrackets('{[[]]()', true)).toBe('{');
    expect(checkBrackets('H{i[r[e] M]e()${-Dhruv}dutt', true)).toBe('{');
});

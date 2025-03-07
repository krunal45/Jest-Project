test('two plus two',()=>{
const sum = 2 + 2;
expect(sum).toBeGreaterThan(3);
expect(sum).toBeGreaterThanOrEqual(3.5);
expect(sum).toBeLessThan(5);
expect(sum).toBeLessThanOrEqual(4.5);

// toBe and toEqual are equivalent for numbers
expect(sum).toBe(4);
expect(sum).toEqual(4);
})

test('Testing floating point numbers',()=>{
    const value = 0.1+0.3;
    expect(value).toBeCloseTo(0.4);
})
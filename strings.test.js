test('Check if Apple contains character t',()=>{
    const fruit = 'Apple';
    expect(fruit).not.toMatch(/t/);
})

test('Check if Banana contains string nan',()=>{
    const fruit = 'Banana';
    expect(fruit).toMatch(/nan/);
})
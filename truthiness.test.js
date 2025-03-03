let a = null;
let b;
let c = 1
console.log(a);
console.log(b);

test('null check', () => {
    expect(a).toBeNull();
  });

  test('undefined check', () => {
    expect(b).toBeUndefined();
    expect(a).not.toBeUndefined();
  }); 

  test('defined check', () => {
    expect(b).not.toBeDefined();
    expect(a).toBeDefined();
  });

  test('Truthiness check', () => {
    expect(a).not.toBeTruthy();
    expect(a).toBeFalsy();
    expect(c).toBeTruthy();
  });
 
const sum = require('./sum');
let student = {
  "Student Name": "John Doe",
  "Age": 20,
  "Gender": "Male"
};

// Using toBe() Matcher

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Verify student Name',()=>{
  expect(student['Student Name']).toBe('John Doe');
})

test('Verify student Age',()=>{
  expect(student['Age']).toBe(20);
})

test('Verify student Gender',()=>{
  expect(student['Gender']).toBe('Male');
})

// Using not.toBe() Matcher
test('Verify if student Gender is not female',()=>{
  expect(student['Gender']).not.toBe('Fe-Male');
})

// Using toEqual() Matcher
test('Verify student Name,Age,Gender',()=>{
  expect(student).toEqual({
    "Student Name": "John Doe",
    "Age": 20,
    "Gender": "Male"
  });
})

test('Verify student Name is not equal to Age',()=>{
  expect(student['Student Name']).not.toEqual(student['Age']);
})


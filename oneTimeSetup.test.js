const student = {
    'Name':'ABC1',
    'Age':12,
    'Class': 'X',
    'Gender': 'Male'
};

beforeAll(()=>{
    console.log('Open DB!');
})

test('Verify Student Name',()=>{
    expect(student.Name).toEqual('ABC1');
    console.log('PASS: Verified Student Name');
})

test('Verify Student Age',()=>{
    expect(student.Age).toEqual(12);
    console.log('PASS: Verified Student Age');
})

test('Verify Student Class',()=>{
    expect(student.Class).toEqual('X');
    console.log('PASS: Verified Student Class');
})

test('Verify Student Gender',()=>{
    expect(student.Gender).toEqual('Male');
    console.log('PASS: Verified Student Gender');
})


afterAll(()=>{
    console.log('Close DB!');
})
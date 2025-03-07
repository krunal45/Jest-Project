const daysOfWeek = ['Mon','Tue','Wed','Thu','Fri'];
const weekEnds = ['Sat','Sun'];

beforeAll(()=>{
    console.log('This will execute before suite starts! > 1');
})

beforeEach(()=>{
    console.log('This will execute before Each Test! > 2');
})

test('Verify if week contains Monday',()=>{
    expect(daysOfWeek).toContain('Mon');
})

test('Verify if week do not contain Week Ends',()=>{
    expect(daysOfWeek).not.toContain('Sat');
    expect(daysOfWeek).not.toContain('Sun');
})

afterEach(()=>{
    console.log('This will execute after Each Test! > 2');
})

afterAll(()=>{
    console.log('This will execute after suite ends! > 1');
})

describe('Test 2',()=>{
    beforeEach(()=>{
        console.log('This will execute before Each Test that is within describe block ! > 3');
    })

    test('Verify weekend contains saturday',()=>{
        expect(weekEnds).toContain('Sat');
    })

    test('Verify weekend contains sunday',()=>{
        expect(weekEnds).toContain('Sun');
    })


    afterEach(()=>{
        console.log('This will execute after Each Test that is within describe block ! > 3');
    })
})
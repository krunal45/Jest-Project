const getSavedCardsJSON = {"id":"1066681352","email":"testuser7241.@testcom","savedCards":[{"id":"src_r4yiwoea77hefnk7jx2i43j3ee","last4":"1157","bin":"465910","cardType":"DEBIT","cardCategory":"CONSUMER","issuer":"LLOYDS BANK PLC","issuerCountry":"GB","productId":"F","productType":"Visa Classic","expiryMonth":6,"expiryYear":2026,"scheme":"VISA"}]}
beforeEach(()=>{
    console.log('Setup DB!');
})

test('Verify userEmail',()=>{
    expect(getSavedCardsJSON.email).toEqual('testuser7241.@testcom');
    console.log('PASS: verified userEmail');
})

test('Verify cardType',()=>{
    expect(getSavedCardsJSON.savedCards[0].cardType).toEqual('DEBIT');
    console.log('PASS: verified cardType');
})

afterEach(()=>{
    console.log('TearDown DB!');
})
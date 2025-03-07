const fruits = ['Apple','Banana','Chickoo'];
const getSavedCards = {
    "id": "1066681352",
    "email": "testuser7241.@testcom",
    "savedCards": [
      {
        "id": "src_r4yiwoea77hefnk7jx2i43j3ee",
        "last4": "1157",
        "bin": "465910",
        "cardType": "DEBIT",
        "cardCategory": "CONSUMER",
        "issuer": "LLOYDS BANK PLC",
        "issuerCountry": "GB",
        "productId": "F",
        "productType": "Visa Classic",
        "expiryMonth": 6,
        "expiryYear": 2026,
        "scheme": "VISA"
      }
    ]
  }
const expectedSourceId = 'src_r4yiwoea77hefnk7jx2i43j3ee'
const savedCards = getSavedCards.savedCards[0]


test('Fruits to contain Apple',()=>{
    expect(fruits).toContain('Apple');
})

test('Verify sourceId',()=>{
    // This won't work for Json!
    // expect(savedCards).toContain({
    //     "id": "src_r4yiwoea77hefnk7jx2i43j3ee",
    //     "last4": "1157",
    //     "bin": "465910",
    //     "cardType": "DEBIT",
    //     "cardCategory": "CONSUMER",
    //     "issuer": "LLOYDS BANK PLC",
    //     "issuerCountry": "GB",
    //     "productId": "F",
    //     "productType": "Visa Classic",
    //     "expiryMonth": 6,
    //     "expiryYear": 2026,
    //     "scheme": "VISA"
    //   });
    expect(expectedSourceId).toEqual(savedCards.id);
})
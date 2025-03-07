const responseBody = {
    "expiry_month": 6,
    "expiry_year": 2026,
    "bin": "465910",
    "last4": "1157",
    "name": "Bruce Wayne",
    "billing_address": {
      "address_line1": "Checkout.com",
      "address_line2": "90 Tottenham Court Road",
      "city": "London",
      "state": "st",
      "zip": "W1T 4TJ",
      "country": "GB"
    },
    "phone": {
      "country_code": "+1",
      "number": "415 555 2671"
    },
    "scheme": "VISA",
    "card_type": "DEBIT",
    "card_category": "CONSUMER",
    "issuer": "LLOYDS BANK PLC",
    "issuer_country": "GB",
    "product_id": "F",
    "product_type": "Visa Classic",
    "token": "tok_zndab5w3hfuevp6zuscgyttzda",
    "type": "card",
    "expires_on": "2025-03-07T11:51:20.9190724Z"
  }

test('Verify billing_address',()=>{
    expect(responseBody.billing_address.address_line1).toEqual('Checkout.com');
    expect(responseBody.billing_address.address_line2).toEqual('90 Tottenham Court Road');
    expect(responseBody.billing_address.city).toEqual('London');
    expect(responseBody.billing_address.state).toEqual('st');
    expect(responseBody.billing_address.zip).toEqual('W1T 4TJ');
    expect(responseBody.billing_address.country).toEqual('GB');
})

test('Verify expiry_month',()=>{
    expect(responseBody.expiry_month).toEqual(6);
})

test('Verify expiry_year',()=>{
    expect(responseBody.expiry_year).toEqual(2026);
})
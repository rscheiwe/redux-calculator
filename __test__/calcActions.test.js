const sum=require('../__mocks__/sum.js')

describe('>>>>A C T I O N S --- Test Calculator Actions', () => {
  it('Correctly sets button', () => {
    let a = 1
    let b = 2
    expect(sum(a,b)).toEqual(3)
  })
})

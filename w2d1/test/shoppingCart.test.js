
const calculateShoppingCart = require('../shoppingCart')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

it('should return "shopping cart is empty" if there is no products arg', () => {
  const taxAmountQC = 0.14975
  const result = calculateShoppingCart(null, taxAmountQC)

  result.should.be.a('string')
  result.should.equal("shopping cart is empty")

  // chai.expect('result')
})

it('should return "tax amount is empty" if there is no taxAmount arg', () => {
  const product = { name: "I'm a product", price: 42 }
  const result = calculateShoppingCart(product, null)

  result.should.be.a('string')
  result.should.equal("tax amount is empty")
})

it('should return a proper total, subtotal and taxAmount when given one product', () => {
  const taxAmountQC = 0.14975
  const product = { name: "I'm a product", price: 42 }
  const products = [product]
  const expectedSubtotal = 42
  const expectedTaxAmount = 6.29
  const expectedTotal = 48.29

  const result = calculateShoppingCart(products, taxAmountQC)

  result.should.be.an('object')
  result.totalPrice.should.equal(expectedTotal)
  result.subtotal.should.equal(expectedSubtotal)
  result.taxAmount.should.equal(expectedTaxAmount)

})

it('should return a proper total, subtotal and taxAmount when given two products', () => {
  const taxAmountQC = 0.14975
  const product = { name: "I'm a product", price: 42 }
  const secondProduct = { name: "Another product", price: 50 }
  const products = [product, secondProduct]
  const expectedSubtotal = 92
  const expectedTaxAmount = 13.78
  const expectedTotal = 105.78

  const result = calculateShoppingCart(products, taxAmountQC)

  result.should.be.an('object')
  result.totalPrice.should.equal(expectedTotal)
  result.subtotal.should.equal(expectedSubtotal)
  result.taxAmount.should.equal(expectedTaxAmount)

})

it('should return a list of product names when given two products', () => {
  const taxAmountQC = 0.14975
  const product = { name: "I'm a product", price: 42 }
  const secondProduct = { name: "Another product", price: 50 }
  const products = [product, secondProduct]
  const expectedProductNames = ["I'm a product", "Another product"]
  const result = calculateShoppingCart(products, taxAmountQC)

  result.should.be.an('object')
  result.productNames.should.be.an('array')

  result.productNames[0].should.equal("I'm a product")
  result.productNames[1].should.equal("Another product")

  result.productNames.should.deep.equal(expectedProductNames)

})
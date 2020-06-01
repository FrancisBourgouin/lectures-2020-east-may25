// TDD vs unit testing ?

// Should output: total price, subtotal, tax amount, product names
// const cart = {
//   totalPrice: 9999,
//   subtotal: 9000,
//   taxAmount: 999,
//   productNames: ['A', 'product', 'here']
// }
// Should have an input : product name, quantity, product.price, location(tax amount)
// const taxAmountQC = 0.14975
// const taxAmount = 0.13

// const product = { name: "I'm a product", price: 42 }
// const products = [product, product, product]

const calculateShoppingCart = (products, tax) => {
  if (!products && !tax) {
    return "what the hell?"
  }
  else if (!products || !tax) {
    return products ? "tax amount is empty" : "shopping cart is empty"
  } else {
    const productNames = []
    // const productNames = products.map(singleProduct => singleProduct.name)


    // const subtotal = products[0].price
    let subtotal = 0

    products.forEach(singleProduct => {
      subtotal += singleProduct.price
      productNames.push(singleProduct.name)
    })

    const taxAmount = Math.round(subtotal * tax * 100) / 100
    const totalPrice = subtotal + taxAmount

    return {
      subtotal,
      taxAmount,
      totalPrice,
      productNames
    }
  }
}

module.exports = calculateShoppingCart
/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* New code starts here */

//Products. How much does a single orange go for nowadays?
const products = [
  {
    name: "Cherry",
    price: 5.99,
    quantity: 0,
    productId: 1,
    image: "images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 3.99,
    quantity: 0,
    productId: 2,
    image: "images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: 6.99,
    quantity: 0,
    productId: 3,
    image: "images/strawberry.jpg"
  }
];

//cart array
const cart = [];

//adding product to cart
function addProductToCart(productId) {
  const product = products.find(prod => prod.productId === productId);

  if (product) {
    const cartProduct = cart.find(prod => prod.productId === productId);

    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      const newCartProduct = { ...product, quantity: 1 };
      cart.push(newCartProduct);
    }

    product.quantity++;
  } else {
    console.log('Product not found');
  }
}

//increase the amount of items in the cart. The "add to cart" button should work after this.
function increaseQuantity(productId) {
  const product = products.find(prod => prod.productId === productId);

  if (product) {
    product.quantity++;
    const cartProduct = cart.find(prod => prod.productId === productId);

    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      const newCartProduct = { ...product, quantity: 1 };
      cart.push(newCartProduct);
    }
  } else {
    console.log('Product not found');
  }
}

//decrease the amount of items in the cart. If th eitems in the cart are less than 1, the item is removed from the cart in its entirety.
function decreaseQuantity(productId) {
  const product = products.find(prod => prod.productId === productId);

  if (product && product.quantity > 0) {
    product.quantity--;
    const cartProduct = cart.find(prod => prod.productId === productId);

    if (cartProduct) {
      cartProduct.quantity--;
      if (cartProduct.quantity === 0) {
        cart.splice(cart.indexOf(cartProduct), 1);
      }
    }
  } else {
    console.log('Product not found or quantity is already 0');
  }
}

//removing an item from the cart.
function removeProductFromCart(productId) {
  const product = products.find(prod => prod.productId === productId);

  if (product) {
    product.quantity = 0;
    const cartProduct = cart.find(prod => prod.productId === productId);

    if (cartProduct) {
      cart.splice(cart.indexOf(cartProduct), 1);
    }
  } else {
    console.log('Product not found');
  }
}

// Cart items should now be viewable here. I'm now seeing that an item won't be shown in the cart until the function to both remove and add are added. 
function cartTotal() {
  return cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0);
}

//removes all products from the cart. Only appears.. if there is something in the cart.
function emptyCart() {
  cart.length = 0;
  products.forEach(prod => prod.quantity = 0);
}

//payment. 
let balance = 0;

function pay(amount) {
  balance += amount;
  const total = cartTotal();

  if (balance >= total) {
    const change = balance - total;
    balance = 0;
    emptyCart();
    return change;
  } else {
    const remainingBalance = total - balance;
    return -remainingBalance;
  }
}


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}

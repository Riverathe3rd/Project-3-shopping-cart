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

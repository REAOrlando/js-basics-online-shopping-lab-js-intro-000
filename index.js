var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function rand() {
  //   var num =
  // num = num * 10
  var num = Math.floor(Math.random() * 100)
console.log(num)
return num;
}

function addToCart(item) {
  var num = rand()

  cart.push()

  var items = { [item]: num };
  cart.push(items);
  console.log(`${item} has been added to your cart.`)
  return cart;

 // write your code here
}

function viewCart() {
  var returnStatement = "In your cart, you have "

  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    return console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if (cart.length > 1) {
    var itemKeys = Object.keys(cart[i]);
    var price = cart[i][itemKeys];
    for (var i = 0; i < cart.length; i ++) {
      if (i = 0 && cart.length < 3) {
        returnStatement += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]} and`;
      }  else if (i > 0 && cart.length > 2 && i != cart.length  ) {
        returnStatement += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`;
      }  else {
        returnStatement += ` and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`;
      }
      return console.log(returnStatement);
    }

  }
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

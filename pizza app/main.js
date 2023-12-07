function calculateTotal() {
  // Get values from the form
  const pizzaType = document.getElementById('pizzaType').value;
  const pizzaSize = document.querySelector('input[name="pizzaSize"]:checked').value;
  const toppings = document.querySelectorAll('input[name="topping"]:checked');
  const deliveryOption = document.getElementById('deliveryOption').value;

  // Calculate total price
  let totalPrice = 0;

  // Pizza Type Prices
  const pizzaTypePrices = {
    cheese: 10,
    veggie: 8,
    pepperoni: 9,
    meat: 11,
    margherita: 13,
    bbqChicken: 14,
    hawaiian: 15
  };
  totalPrice += pizzaTypePrices[pizzaType];

  // Pizza Size Prices
  const pizzaSizePrices = {
    2: 7.5,
    4: 10.5,
    6: 12.5,
    8: 15.5
  };
  totalPrice += pizzaSizePrices[pizzaSize];

  // Toppings Prices
  const toppingsPrices = toppings.length > 4 ? (toppings.length - 4) * 0.5 : 0;
  totalPrice += toppingsPrices;

  // Delivery Option Prices
  const deliveryOptionPrices = {
    deliveryHome: 5,
    eatIn: 0,
    pickup: 0
  };
  totalPrice += deliveryOptionPrices[deliveryOption];

  // Display the updated total price
  document.getElementById('totalPrice').innerText = `Total Price: €${totalPrice.toFixed(2)}`;
}

function submitOrder() {
  // Add logic to handle order submission
  alert('Order submitted!');
}

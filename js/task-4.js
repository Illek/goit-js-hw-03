function getShippingCost(country) {
  let price;
  switch (country.toLowerCase()) {
    case "china":
      country = "China";
      price = 100;
      break;
    case "chile":
      country = "Chile";
      price = 250;
      break;
    case "australia":
      country = "Australia";
      price = 170;
      break;
    case "jamaica":
      country = "Jamaica";
      price = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  const message = `Shipping to ${
    country[0].toUpperCase() + country.slice(1)
  } will cost ${price} credits`;
  return message;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

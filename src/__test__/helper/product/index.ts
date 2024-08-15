export function getTestDataForCreateNewProduct() {
  return function () {
    return {
      category: "Any Category",
      name: "Watawat 3",
      description: "The one used in The Exorcist movie",
      price: 1507.0,
      image: "The Image",
      qty: 120,
      isAvailable: false,
    };
  };
}

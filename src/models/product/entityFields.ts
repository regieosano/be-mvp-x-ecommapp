export const entityProperties = {
  category: {
    type: String,
    ref: "Category",
  },
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
    default: "img",
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    default: 0,
  },
};

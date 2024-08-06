export const entityProperties = {
  category: {
    type: String,
    ref: "Category",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
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
  isApproved: {
    type: Boolean,
    required: false,
    default: true,
  },
  isAvailable: {
    type: Boolean,
    required: false,
    default: true,
  },
  createdAt: {
    type: Date,
    required: false,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    required: false,
    default: new Date(),
  },
};

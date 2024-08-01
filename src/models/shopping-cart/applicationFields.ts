export const applicationProperties = {
  shoppingDate: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
};

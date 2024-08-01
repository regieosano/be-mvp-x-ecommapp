export const applicationProperties = {
  isApproved: {
    type: Boolean,
    required: false,
    default: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
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

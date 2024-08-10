export const applicationProperties = {
  password: {
    type: String,
    required: false,
  },
  isVerified: {
    type: Boolean,
    required: false,
    default: false,
  },
  otp: {
    type: String,
    required: false,
    default: "",
  },
  expiresAt: {
    type: Number,
    required: false,
    default: 0,
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

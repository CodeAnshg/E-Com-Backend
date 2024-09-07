const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discountPercentage: {
    type: Number
  },
  rating: {
    type: Number
  },
  stock: {
    type: Number,
    required: true
  },
  tags: [
    {
      type: String
    }
  ],
  brand: {
    type: String,
    required: true
  },
  sku: {
    type: String
  },
  weight: {
    type: Number
  },
  dimensions: {
    width: Number,
    height: Number,
    depth: Number
  },
  warrantyInformation: {
    type: String
  },
  shippingInformation: {
    type: String
  },
  availabilityStatus: {
    type: String
  },
  returnPolicy: {
    type: String
  },
  minimumOrderQuantity: {
    type: Number
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    barcode: String,
    qrCode: String
  },
  images: [
    {
      type: String
    }
  ],
  thumbnail: {
    type: String
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

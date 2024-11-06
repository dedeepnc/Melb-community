// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 5000,
  },
  date: {
    type: String, // Ensure it matches the format used in your input
    required: true,
  },
  location: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 5000,
  },
  category: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  contactDetails: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 5000,
  },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

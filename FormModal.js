const mongoose = require('mongoose');

const messageSchema = {
    name: String,
    email: String,
    phone: String,
    message: String,
    menu: String,
    date: { type: Date, default: Date.now },
    time: String, 
    guests: Number,
    card: String,
    cardName: String,
    cardNumber: Number,
    expiryDate: { type: Date, default: Date.now }
}

module.exports = mongoose.model('restaurant-form', messageSchema)
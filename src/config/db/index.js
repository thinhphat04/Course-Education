const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://thinhphat_2404:Ngobo240404@cluster0.6xy0oke.mongodb.net/blog');
        console.log('Connect Successfully!');
    } catch (error) {
        console.log('Fail!');
    }

};

module.exports = { connect };







const mongoose = require('mongoose');


const mycon = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/acro');
        console.log('connected to database');
        
    } catch (err) {
        console.error('database connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = mycon;

const mongoose = require('mongoose');


module.exports = async() => {

    try {
        await mongoose.connect('mongodb://localhost:27017/amazon_demo', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 
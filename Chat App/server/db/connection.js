const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.ChatApp}:${process.env.admin1234}@cluster0.zw6hky5.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))
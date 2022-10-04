const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://zachgexler12:Nadine007!@clustr0.fg1i1ct.mongodb.net/?retryWrites=true&w=majority'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = mongoose.connection;
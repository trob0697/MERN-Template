const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exampleSchema = new Schema ({

})

const Example = mongoose.model('test', exampleSchema);

module.exports = Example;
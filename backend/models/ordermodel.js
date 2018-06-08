const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user:{type: Schema.Types.ObjectId, ref:"User", required:true},
    cart:{type: Object, required: true },
    address: {type:String, required:true},
    name:{type: String, required:true},
    paymentId: {type: String, required: true}
});

module.exports = mongoose.model('Order', orderSchema);

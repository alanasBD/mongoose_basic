const mongoose = require('mongoose');
//Product Schema
const productSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Plz provide a name for this product"],
        trim: true,
        unique: [true,"same data"],
        minLength: [3, "Name must be three characters"],
        maxLength: [100, "Name is too large"],
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"],
      },
      unit: {
        type: String,
        required: true,
        enum: {
          values: ["kg", "litre", "pcs"],
          message: "Unit value can't be {VALUE}",
        },
      },
      quantity: {
        type: Number,
        required: true,
        min: [0, "Quantity cant be negative"],
        validate: {
          validator: (value) => {
            if (Number.isInteger(value)) {
              return true;
            } else {
              return false;
            }
          },
          message: "Quantity must be a number",
        },
      },
      status: {
        type: String,
      
        enum: {
          values: ["in-stock", "out-of-stock", "discontinued"],
          message: "status cant be {VALUE}",
        },
      }
     
    },
    { timestamps: true }
  );
//middle ware
productSchema.pre('save',function(next){
  console.log('Before saving data'); 
  if(this.quantity===0){
    this.status = "out-of-stock"
  }  
  next();
})
productSchema.post('save',function(doc,next){
  console.log('After saving data'); 
  
  next();
})
//intstance method

productSchema.methods.logger = function(){
    console.log(`Info saved for ${this.name}`);
}

  //Model creation
const Product = mongoose.model("Product", productSchema);

module.exports = Product;


const express = require("express");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

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
    },
    // createdAt:{
    //     type:Date,
    //     default:Date.now
    // },
    // updatedAt:{
    //     type:Date,
    //     default:Date.now
    // },
    // supplier:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Supplier"
    // }
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

//Route
app.post("/api/v1/product", async (req, res) => {
  try {
    //save method
    // const product = new Product(req.body);
    // const result = await product.save();

    //create method
    const result = await Product.create(req.body)
    //instance method called;
    result.logger();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
     res.status(400).json({
        error:error.message
     })
  }
});

//get method
app.get('/api/v1/product',async(req,res)=>{
   try {
    const products = await Product.findById('63260f26ff8c0abe25554bef')
    res.status(200).json({
        products
    })
    
   } catch (error) {
     res.status(400).json({
        status:"fail",
        message:"cant get data",
        error:error.message
     })
   }
})

app.get("/", (req, res) => {
  res.status(200).json({ message: "Anas" });
});

module.exports = app;

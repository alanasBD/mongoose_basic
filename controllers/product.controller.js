const { getProductsSerive, createProductService } = require("../services/product.service")

//getproducts
const getProducts = async(req,res)=>{
    try {
     const products = await getProductsSerive();
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
 }


//create product
 const createProduct = async (req, res) => {
    try {
      //save method
      // const product = new Product(req.body);
      // const result = await product.save();
  
      //create method
      const result = await createProductService(req.body);
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
  }


module.exports = {
    getProducts,
    createProduct
}


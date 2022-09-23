const Product = require('../models/Product');
module.exports.getProductsSerive = async( )=>{
   
    const products = await Product.findById('6325adc07988b482697a479a')
    return products;
}

module.exports.createProductService = async(data) =>{
  const product =  await Product.create(data);
  return product;
}


  // const products = await Product.find({});

    // const product = await Product.find({_id:"6325b144a0c25c4ce6458802"});

    // const product = await Product.find({_id:"6325b144a0c25c4ce6458802",name:"phal"});  

     // const product = await Product.find({$or:[{_id:'6325b144a0c25c4ce6458802'},{name:'Phal'}]})

     //const  products = await Product.find({status:{$ne:"out-of-stock"}})

    //Projection
    //  const products = await Product.find({},'name quantity') with name and quantity

     //Projection
    //  const products = await Product.find({},'-name -quantity') with out name and quantity


    //const products = await Product.find({}).limit(2)  chaining


    // const products = await Product.find({}).sort({quantity:-1})  //dsc order


    //query builder methods
    // const products = await Product.where("name").equals("chal").where("quantity").gt(10);

    //using regex
    // const products = await Product.where("name").equals(/\w/).where("quantity").gt(10).limit(2);

    // const products = await Product.where("name").equals(/\w/).where("quantity").gt(10).limit(2)
    // .sort({quantity:-1});
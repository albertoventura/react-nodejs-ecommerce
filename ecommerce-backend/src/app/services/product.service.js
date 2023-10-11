const Product = require("../models/product.model");

const productService = {
    getAll: async _ => {        
        try {
            return await Product.find()
                .then( products => {                    
                    return {
                        status: 200,
                        message: "Products successfully found",
                        products,
                    };
                })
                .catch(e => {
                    return e;
                });
        } catch(e){
            return e;
        }
    },
    getById: async (id) => {
        try {
            return await Product.findById({_id: id})
                .then(product => {
                    return {
                        status: 200,
                        message: "Product successfully found",
                        product,
                    };
                })
                .catch( e =>{
                    return e;
                });
        } catch(e){
            return e;
        }
    },
    create: async (data) => {
        try {
            const product = new Product({
                title: data.title,
                description: data.description,
                price: data.price,
                cover: data.cover,
            });
            
            return product.save()
                .then(doc => {
                    return { 
                        status: 200,
                        message: "Product successfully created",
                        product: doc
                    };
                })
                .catch( err => {
                    // exemplo de objeto personalizado no retorno
                    return {
                        status: 400,
                        message: err
                    };
                });
        } catch(e){
            return e;
        }
    },
    update: async (data) => {
        try {
            return await Product.findById({_id: data.id})
                .then( product => {

                    old = product;
                    product.title = data.title ?? old.title;
                    product.description = data.description ?? old.description;
                    product.price = data.price ?? old.price;
                    product.cover = data.cover ?? old.cover;

                    return product.save()
                        .then(doc => {
                            return { 
                                status: 200,
                                message: "Product successfully updated",
                                product: doc,
                            };
                        })
                        .catch( err => {
                            return err;
                        });
                })
                .catch(e => {
                    return e;
                });
        } catch (e) {
            return e;
        }
    },
    delete: async (id) => {
        try {
            return await Product.findByIdAndDelete({_id: id})
                .then(data => {
                    return { 
                        status: 200,
                        message: "Product successfully deleted",
                        product: data,
                    };
                })
                .catch(e => {
                    return e;
                });
        } catch(e){
            return e;
        }
    },
}

module.exports = productService;
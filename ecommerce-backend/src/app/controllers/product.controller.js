const productService = require('../services/product.service');
const statusMessage = require('../../constant/statusMessage');

const productController = {
    getAll: async (req, res) => {
        try {
            await productService.getAll()
                .then( products => {
                    return res.status(products.status).json(products);
                })
                .catch( err => {
                    // exemplo de envio de erro direto
                    return res.status(400).json(err);
                });
        } catch(e) {
            return res.status(500).send(e);
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await productService.getById(id);
            return res.status(response.status).json(response);
        } catch(e) {
            // exemplo de envio de mensagem personalizada
            return res.status(400).send(statusMessage.product.notFound);
        }
    },
    create: async (req, res) => {
        
        try {
            const { title, description, price, cover } = req.body;
            /* let img;

            if(req.file){
                img = req.file.path
            }
             */
            await productService.create({title, description, price, cover})
                .then( data => {
                    return res.status(data.status).json(data);
                })
                .catch( e =>{
                    return res.status(400).json(e);
                });
        } catch(e) {
            return res.status(500).json(e);
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, description, price, cover } = req.body;
            /* let img;
            if(req.file){
                img = req.file.path
            } */
            // exemplo de uso sem then catch
            const response = await productService.update({id, title, description, price, cover});
            
            return res.status(response.status).json(response);

        } catch(e) {
            return res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await productService.delete(id)
                .then(data => {
                    return res.status(data.status).json(data);
                })
                .catch( e => {
                    return res.status(400).json(e);
                });

        } catch(e) {
            return res.status(500).send(e);
        }
    }
}

module.exports = productController;
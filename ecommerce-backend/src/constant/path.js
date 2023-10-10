const crud = {
    getAll: '/',
    getById: '/:id',
    create: '/create',
    update: '/:id',
    delete: '/:id'
}

const product = {
    root: '/product',
    ...crud
}



module.exports = {
    product,
}
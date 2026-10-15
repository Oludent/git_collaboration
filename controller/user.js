const database = require('../model/database.json')

const fs = require('fs')

const saveToDb = (string) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./model/database.json', string, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const createProduct = async (req, res) => {
    const id = database.length + 1;
    const {productName, quantity, price$, availability} = req.body
    const product = {
        id,
        productName,
        quantity,
        price$,
        availability
    }

    database.push(product)

    await saveToDb(JSON.stringify(database, null, 2))

    res.status(201).json({
        message: 'Product created!',
        data: product
    })
}

const checkProducts = (req, res) => {
    const products = database;
    res.status(200).json({
        massage: `All availabile products are of ${database.length}`,
        data: products
    })
}

const checkSingleProduct = (req, res)=>{
    const id = req.params.id;
    const product = database.find((product) => product.id == id)
    if (product == null){
        return res.status(404).json({
            massage:`Product doesn't exist`
        })
    }

        res.status(200).json({
            massage: `Product details`,
            data: product
        })
}

const updateProduct = async (req, res)=>{
    const id = req.params.id;
    const{productName, quantity, price$, availability} = req.body
    const product = database.find((product) => product.id == id)
    if (product == null){
        return res.status(404).json({
            massage: `Product cannot  be updated!`})
    }

product.productName = productName || product.productName;
product.quantity = quantity || product.quantity;
product.price$ = price$ || product.price$;
product.availability = availability || product.availability;

await saveToDb(JSON.stringify(database, null, 2));

res.status(201).json({
    massage: `Product updated successfully!`,
    data: product
})
}

 const deleteProduct =async (req, res)=>{
    const id = req.params.id;
    const prod = database.findIndex((product)=> product.id == id);

    database.splice(prod, 1)


await saveToDb(JSON.stringify(database, null, 2))

res.status(200).json({
    massage: `Product deleted successfully!`,
    data: prod
})
 };

module.exports = {
    createProduct,
    checkProducts,
    checkSingleProduct,
    updateProduct,
    deleteProduct
}
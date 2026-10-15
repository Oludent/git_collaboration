const database = require('./model/database.json')

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
    const {productName, quantity, price, availability} = req.body
    const product = {
        id: database.length + 1,
        productName,
        quantity,
        price,
        availability
    }

    database.push(product)

    await saveToDb(JSON.stringify(database, null, 2))

    res.status(201).json({
        message: 'Product created',
        data: product
    })
}

const checkProducts = (req, res) => {
    const products = database
    res.status(200).json({
        massage: `All availabily products are of ${database.length}`,
        data: products
    })
}

const checkSingleProduct = (req, res)=>{
    const id = req.body.params
    const product = database.find((id) => id == id)
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
    const id = req.body.params;
    const{productName, quantity, price, availability} = req.body
    const product = database.find((id)=> id == id)
    if (product == null){
        return res.status(404).json({massage: `Product cannot  be updated!`})
    }

    product.productName == 
await saveToDb(JSON.stringify(database, null, 2));

res.status(201).json({
    massage: `Product updated successfully!`,
    data: product
})
}

module.exports = {
    createProduct,
    checkProducts,
    checkSingleProduct,
}
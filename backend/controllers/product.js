import product from "../models/product.js";

const registerProduct = async (request, response) => {

    // Validate blanks
    let blanks = !request.body.name || !request.body.price || !request.body.stock || !request.body.description;
    if(blanks) {
        return response.status(400).send("Blank data.");
    }

    // Validate existing data
    const existingProduct = await product.findOne({name: request.body.name});
    if(existingProduct) {
        return response.status(400).send("Product already exists.");
    }

    // Structure the input object
    const productSchema = new product(
        {
            "name": request.body.name,
            "price": request.body.price,
            "stock": request.body.stock,
            "description": request.body.description,
            "registerDate": request.body.registerDate,
            "visible": true
        }
    );

    // Product registration operation
    const result = await productSchema.save();
    if(!result) {
        return response.status(400).send("Could not create product.");
    }

    return response.status(200).send(result);
}

export default {registerProduct};
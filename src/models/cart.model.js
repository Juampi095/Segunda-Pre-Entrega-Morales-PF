import { Schema,model } from "mongoose";
import { productModel } from "./product.model.js";

const cartCollection = 'carts';

const cartSchema = newSchema({
    products:{
        type: [
            {
                product:{type: Schema.type.ObjectId, ref: 'products'},
                quantity: {type,Number}
            }
        ], default:[]
    }
})

cartSchema.pre('findOne',function(){
    this.populate('products.product');
})

export const cartModel=model(cartCollection,cartSchema);
import { getProducts } from "./ProductProvider.js"
import { getProductTypes } from "./ProductTypeProvider.js"
import { ProductList } from "./ProductList.js"

getProducts()
    .then(getProductTypes)
    .then(ProductList)
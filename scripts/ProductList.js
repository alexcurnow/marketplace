import { useProducts } from "./ProductProvider.js"
import { useProductTypes } from "./ProductTypeProvider.js"
import { Product } from "./Product.js"

const contentTarget = document.querySelector(".productList")

export const ProductList = () => {
    const products = useProducts()
    const productTypes = useProductTypes()

    const render = () => {
        contentTarget.innerHTML = products.map(product => {
            // Find this product's type
            const type = productTypes.find(type => type.id === product.productTypeId)

            // Get HTML representation of product
            Product(product, type)

            return html
        }).join("")
    }

    render()
}

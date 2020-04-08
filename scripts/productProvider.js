let products = []

export const useProducts = () => products.slice()

export const getProducts = () => fetch("http://localhost:8088/products")
    .then(res => res.json())
    .then(parsedProducts => products = parsedProducts)
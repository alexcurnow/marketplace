let types = []

export const useProductTypes = () => types.slice()

export const getProductTypes = () => fetch("http://localhost:8088/producttypes")
    .then(res => res.json())
    .then(parsedTypes => types = parsedTypes)
export const Product = (product, type) => {
  return `
      <section class="product">
          <header>
              <h2>${product.name}</h2>
          </header>
          <div>
              Price $${product.price}
          </div>
          <div>
              In category ${type.name}
          </div>
      </section>
  `
}

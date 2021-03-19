import React from "react";
import ShopContext from "../context/context";

const Products = () => {
  return (
    <ShopContext.Consumer>
      {(context) => (
        <>
          <main className="products">
            <ul>
              {context.products.map((product) => (
                <li key={product.id}>
                  <div>
                    <p>
                      <strong>{product.title}</strong>
                      {product.desc}
                    </p>
                    {product.price}€
                  </div>
                  <div>
                    <button onClick={() => context.addProduct(product)}>
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </>
      )}
    </ShopContext.Consumer>
  );
};

export default Products;

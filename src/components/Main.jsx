import { useState } from "react"

const Main = () => {
    const [addedProducts, setAddedProducts] = useState([])


    const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
    ];

    const addToCart = (product) => { 
        const alreadyInCart = addedProducts.find((item) => item.name === product.name);

        if (!alreadyInCart) {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
        }
    }

  return (
    <>
      <section>
          <div>
            <ul>
                {products.map((curProduct, index) => (
                  <li key={index}>
                    <h2>{curProduct.name}</h2>
                    <p>{curProduct.price}</p>
                    <button onClick={() => addToCart(curProduct)}>Aggiungi al carrello</button>
                  </li>
                ))}
            </ul>
            <div>
                <h2>Carrello</h2>
                <ul>
                    {addedProducts.map((curAdded, index) => (
                        <li key={index}>
                            <p>{curAdded.name}</p>
                            <p>Prezzo: {curAdded.price}</p>
                            <p>Quantità: {curAdded.quantity}</p>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
      </section>
    </>
  )
}

export default Main
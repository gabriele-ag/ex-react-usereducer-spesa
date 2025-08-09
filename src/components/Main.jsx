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
    const productIndex = addedProducts.findIndex((item) => item.name === product.name);

    if (productIndex === -1) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    } else {
      const updatedCart = [...addedProducts];
      updatedCart[productIndex].quantity += 1;
      setAddedProducts(updatedCart);
    }
    }

    const deleteFromCart = (i) => {
        setAddedProducts(curr => curr.filter((curProduct, index) => {
            return index !== i
        }))
    }

    const totalPriceCart = addedProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)

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
                            <button onClick={() => deleteFromCart(index)}>Togli dal carrello</button>
                        </li>
                    ))}
                </ul>
                <h3>Costo totale: €{totalPriceCart.toFixed(2)}</h3>
            </div>
          </div>
      </section>
    </>
  )
}

export default Main
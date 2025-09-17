import { useState, useReducer } from "react"

function cartReducer(state, action) {
  switch (action.type) {

    case 'ADD_ITEM':
      const index = state.findIndex(curElem => curElem.item === action.payload.name)
      if (index === -1) {
        return [...state, {...action.payload, quantity: 1}];
      } else {
        const updated = [...state];
        updated[index].quantity += 1
        return updated
      }

    case 'REMOVE_ITEM':
      const removeIndex = action.payload
      return state.filter((curElem, i) => i !== removeIndex)

    case 'UPDATE_QUANTITY':
      const updated = [...state];
      updated[action.payload.index].quantity = action.payload.quantity;
      return updated;

    default:
      return state;
  }
}

const Main = () => {


    // const [addedProducts, setAddedProducts] = useState([])

    const [addedProducts, dispatch] = useReducer(cartReducer, []);


    const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
    ];

    // const addToCart = (product) => { 
    // const productIndex = addedProducts.findIndex((item) => item.name === product.name);

    // if (productIndex === -1) {
    //   setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    // } else {
    //   const updatedCart = [...addedProducts];
    //   updatedCart[productIndex].quantity += 1;
    //   setAddedProducts(updatedCart);
    // }
    // }

    // const deleteFromCart = (i) => {
    //     setAddedProducts(curr => curr.filter((curProduct, index) => {
    //         return index !== i
    //     }))
    // }

    const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    };

    const deleteFromCart = (index) => {
      dispatch({ type: 'REMOVE_ITEM', payload: index });
    };

    const updateQuantity = (index, quantity) => {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } });
    };

    const totalPriceCart = addedProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <>
      <section>
      <div>
        <ul>
          {products.map((curProduct, index) => (
            <li key={index}>
              <h2>{curProduct.name}</h2>
              <p>€{curProduct.price}</p>
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
                <p>Prezzo: €{curAdded.price}</p>
                <p>
                  Quantità:{" "}
                  <input
                    type="number"
                    value={curAdded.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(index, parseInt(e.target.value))
                    }
                  />
                </p>
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
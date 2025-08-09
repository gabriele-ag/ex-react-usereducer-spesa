const Main = () => {
const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

  return (
    <>
      <section>
          <div>
            <ul>
                {products.map((curProduct, index) => {
                  <li key={index}>
                    <h2>{curProduct.name}</h2>
                    <p>{curProduct.price}</p>
                  </li>
                })}
            </ul>
          </div>
      </section>
    </>
  )
}

export default Main
import "./App.scss";

import { useState, useEffect } from "react";
import products from "./product.json";

import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(150000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const resetBasket = () => {
    setBasket([])
  }  

  return (
    <>
      <Header money={money} total={total} />
      <div className="container products">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
          total={total}
          money={money}
        />
      ))}
      </div>
      {total > 0 && (
        <Basket resetBasket={resetBasket} total={total} products={products} basket={basket} />
      )}
      
    </>
  );
}

export default App;

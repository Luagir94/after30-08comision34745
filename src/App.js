import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import NavBar from './navBar';
import Boton from './boton';
function App() {
  const stock = 10
  const [items, setItems] = useState(0)
  const [isRendered, setIsRendered] = useState(false)
  const sumar = () => items < stock ? setItems(items + 1) : alert('Se alcanzo el maximo')
  const restar = () => items > 0 ? setItems(items - 1) : alert('no se pueden introducir valores negativos')

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true)
    }, 100);
  }, [])

  useEffect(() => {
    items !== 0 && console.log(`tengo : ${items} items`)
  }, [items])

  useEffect(() => {
    console.log(!isRendered ? 'no renderizo' : 'renderizado')
  }, [isRendered])



  useEffect(() => {
    console.log('me disparo una sola vez')
  }, [])


  return (
    <div className="App">
      <NavBar items={items} />
      <Counter stock={stock} sumar={sumar} restar={restar} items={items} />
      {items === 10 && <Boton />}
    </div>
  );
}

export default App;

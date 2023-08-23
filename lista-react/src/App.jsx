
import { useRef } from "react"
import { useState } from "react";
import { v4 } from 'uuid';
import { AddButton, Container, Delete, Product } from "./style";


function App() {
  const [products, setProducts] = useState([]);
  const inputRef = useRef();



  function adicionar() {
    if (inputRef.current.value == false){
      alert('Digite algo')
    }else{
    console.log(v4())
    setProducts([
      {
        id: v4(),
        name: inputRef.current.value,
      },
      ...products])

      inputRef.current.value = '';
    }
  }

  function deletar(id){
   setProducts( products.filter(product => product.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Tarefas</h1>
      <input placeholder="digite aqui" ref={inputRef} />
      <AddButton onClick={adicionar}>ADICIONAR</AddButton>

      {
        products.map((product) => (
          <Product key={product.id}>
          <div >{product.name} </div>
          <Delete onClick={() =>deletar(product.id)}>DELETAR</Delete>
          </Product>
        ))
      }

    </Container>
  )
}

export default App;

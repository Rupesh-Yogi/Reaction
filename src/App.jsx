import { useState } from "react";

function App(){

  const[name, setName] = useState("Rupesh");
  const[age, setAge] = useState(22);


  function changName(){
    setName("Alex")
  }

function increaseAge(){
  setAge((prevAge)=> prevAge + 1)
}

  return(
    <>

    <p>{name}</p>
    <p>{age}</p>

    <button onClick={changName}>Change Name</button>
    <button onClick={increaseAge}>Increase Age</button>
    </>
  )
}

export default App;
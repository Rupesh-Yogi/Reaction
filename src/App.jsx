import { useState } from "react"


function App(){

  const[count, setCount] = useState(0);
  const[name, setName] = useState("Rupesh");

  function increaseCount(){ 
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  }

  function changeName(){
    setName("Alex");
  }

  return(
    <>
    <p>{count}</p>
    <p>This paragraph literally doesn't depend on the count. Not at all. This is just to understand the concept 
      of renders.
    </p>
    <p>{name}</p>
    <button onClick={increaseCount}> Increase</button>
    <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default App;
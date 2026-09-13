
import { useState } from "react";

function App(){

  const[isVisible, setIsVisible] = useState(true);

  function toggleHello(){
    setIsVisible((prevVisible)=> !prevVisible)
  }

  return(
    <>
      <p>{isVisible ? "Hello" : ""}</p>
      <button onClick={toggleHello}>Toggle</button>
    </>
  )

}

export default App;
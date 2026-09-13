
import { useState } from "react";

function App(){

  const[fruits, setFruits] = useState(["Apple", "Mango", "Banana"]);

  function removeBanana(){
    setFruits((prevFruits)=> 
     prevFruits.filter((fruit) => 
      fruit !== "Banana"
    ))
  }

  return(
    <>

    {fruits.map((fruit) => (
      <p key={fruit}>{fruit}</p>
    ))}
 

    <button onClick={removeMango}> Remove Banana </button>
    </>
  )
}

export default App;
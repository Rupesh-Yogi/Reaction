
import { useState } from "react";

function App(){

  const[fruits, setFruits] = useState(["Apple", "Banana"]);


  return(
    <>

    {fruits.map((fruit) => (
      <p key={fruit}>{fruit}</p>
    ))}
 

    <button onClick={()=> setFruits((prevFruits)=> [...prevFruits, "Mango"])}>Add Mango</button>
    </>
  )
}

export default App;






import { useState } from "react";

function App(){
const[user, setUser]  = useState({
  name: "Rupesh",
  age : 22
});

return (
  <>
  <p>{user.name}</p>
  <p>{user.age}</p>

<button onClick={()=> setUser({...user, age:44})}>Change Age</button>
  </>
);
}


export default App;
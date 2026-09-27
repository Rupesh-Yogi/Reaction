


import { useEffect, useState } from "react";

function App(){

const[users, setUsers] = useState([]);

useEffect( () =>  {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((data) => setUsers(data));
    }, [])

return(
  <>
   {users.map((user)=> (
    <p key={user.id}>{user.name}</p>
  ))}
  </>
)

}

export default App;
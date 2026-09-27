


import { useEffect, useState } from "react";

function App(){

const[users, setUsers] = useState([]);
const[loading, setLoading] = useState(true);

useEffect( () =>  {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((data) => { 
      setUsers(data);
      setLoading(false);
    })
    }, [])

return(
  <>
   {users.map((user)=> (
    <p key={user.id}>{user.name}</p>
  ))}
  {loading ? <p>Loading</p> : <p>Loading finished</p>}
  </>
)

}

export default App;



import { useEffect, useState } from "react";

function App(){

  const[users, setUsers] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);


  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })

      .catch((error)=> {
        setError(error);
        setLoading(false);
      });
      
  },[])

  return(
    <>
    {loading ? (
      "Loading"
    ) : (
      error ? (
        "Something went wrong while fetching the data."
      ) : (
        <>
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
          <p>Data fetched successfully.</p>
        </>
      )
    )}
    </>
  )


}

export default App;
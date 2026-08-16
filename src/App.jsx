// function App() {
//   const imageUrl = "https://picsum.photos/300";

//   return (
//     <div>
//       <h1>My Image</h1>
//       <img src={imageUrl} alt="Random image" />
//     </div>
//   );
// }

// export default App;


function App() {
  const imgUrl = "https://imgs.search.brave.com/qtGUeI6nlGllqggCEYHq2yQfLaXquaIWktPfhHKqYWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy93b21hbi13aXRo/LXN1bi1nbGFzc2Vz/LWluLWZsb3dlci1m/aWVsZC1zdW1tZXIt/ZnJlZS1waG90by5q/cGc_dz02MDAmcXVh/bGl0eT04MA";

  return(
    <div>
      <h1>Naya Image</h1>
      <img src={imgUrl} alt="Picture of beautiful girl" />
    </div>
  );
}

export default App;
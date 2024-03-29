
//? Component

function App() {
  //? JS kodu
  const deneme = "REACT"
  return (
    //! JSX (HTML ile JS nin birleşmiş hali)
    <div className="App">
      <h2 style={{color: "red", textAlign: "center"}}>Hoşgeldin React</h2>
      <p className="par">{deneme}</p>
    </div>
  );
}

export default App;

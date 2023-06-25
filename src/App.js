//import logo from './logo.svg';
import './App.css';
import BasicComponent from './components/BasicComponent';

function muchosComponentes(x){
  let arreglo=[]
  for(let i=0; i<x;i++){
    arreglo.push(<BasicComponent inputID={i} texto={i} key={i}/>)
  }

  return arreglo;
}


// EREglas basicoas:
//Todas las etiquetas JSX deben tener un elmento padre
//Las propiedades deben tener unvalor como cadena de texto o como expresion

function App(){
  return(
    <div className="App">         
      {muchosComponentes(5)}
      {/* {[...Array(10)].map((element,i)=> <BasicComponent/>)} */}
      {/* <BasicComponent texto="hi!!" inputID="1"/> */}
    </div>

  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <componenteBasico></componenteBasico>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

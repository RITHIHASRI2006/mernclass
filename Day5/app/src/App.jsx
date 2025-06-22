/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
//import heading from "./heading.jsx";
/*function App(){
  return(
    <>
    <h1>Hello World!</h1>
    </>
  );
}
export default App;
*/

//LOGIN
/*import Login from "./component/Login.jsx";
function App() {
  return(
    <Login/>
  )
}
export default App;

//LOGO
import Pages from "./component/Pages.jsx"
function App() {
  return(
    <Pages/>
  )
}
export default App;
*/

//COMPLETE LOGIN 
import Pages from "./component/Pages.jsx"
import Login from "./component/Login.jsx"
import Afterlogin from "./component/Afterlogin.jsx"
function App() {
  let login=false;
  return login?<Login/>:<Afterlogin/>
}
export default App;
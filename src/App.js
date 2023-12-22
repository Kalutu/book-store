import { useEffect } from "react";
import axios from 'axios'

function App() {

  useEffect(()=>{
      axios.get('http://localhost:5000/books')
           .then(res=>console.log(res))
  },[])

  return (
    <div >
        <h1>MERN Stack project</h1>
    </div>
  );
}

export default App;

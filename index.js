import axios from "axios"
import './App.css';
import {useState,useEffect} from "react"

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      response=>setData(response.data)
    )
  }).catch(()=>{
    console.log(error)
  })
  return (
    <div className="App">
      <table>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        </tr>
      </table>
      {
        data.map(doc=>
          <tr>
            <td>{doc.id}</td>
            <td>{doc.name}</td>
            <td>{doc.username}</td>
            <td>{doc.email}</td>
          </tr>)
      }
      
    </div>
  );
}

export default App;
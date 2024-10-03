import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  // Récupérer les données depuis l'API Express
  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  return (
    <div className="App">
      <h1>Data from NeDB</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

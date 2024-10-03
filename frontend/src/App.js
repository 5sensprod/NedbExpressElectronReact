import { useEffect, useState } from 'react'
import './App.css'
import DataList from './components/DataList'
import { fetchDataFromAPI } from './services/fetchData'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchDataFromAPI()
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <div className="App">
      <h1>Data from NeDB</h1>
      <DataList data={data} />
    </div>
  )
}

export default App

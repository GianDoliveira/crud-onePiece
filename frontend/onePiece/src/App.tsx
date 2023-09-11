import Home from './pages/Home';

import { useEffect, useState } from 'react'
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

function App() {

  const [post, setPost] = useState([])

  useEffect(() => {
    api.get('/members')
      .then((response) => {
        setPost(response.data)
      })
      .catch((error) => {
        console.log('Deu ruim aqui ', error)
      })
  }, [])

  return (
    <div>
      <Home/>
    </div>
  )
}

export default App

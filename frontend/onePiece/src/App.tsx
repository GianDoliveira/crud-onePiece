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
      <Home 
      saudacao="Bem vindo!" 
      message="Que tal criar sua tripulação ?" 
      botao="Criar"
      link="http://localhost:3000/members"
      image="https://media.tenor.com/XPr3w_BtzTIAAAAd/one-piece-straw-hats.gif"
      />
    </div>
  )
}

export default App

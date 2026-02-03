import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url('https://images.pexels.com/photos/35802555/pexels-photo-35802555.jpeg')` }}></div>
  )
}

export default App

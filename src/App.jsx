import {useState, useEffect} from 'react'
import './App.css';
function App() {

  const [time, setTime] = useState()
  useEffect(()=>{
    setInterval(()=>{
      const now = new Date().toLocaleTimeString()
      setTime(now)
    },1000)
  },[])
  return (
    <div className='flex justify-center ' >
    <div  className='text-red-600 max-w-[550px] p-10 text-center text-9xl mt-60 container shadow-xl rounded-lg'>
    <p>{time}</p>
    </div>
    </div>
  )
}

export default App
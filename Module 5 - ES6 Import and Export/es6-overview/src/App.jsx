import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react';

function App() {

  const[watches,setWatches] = useState([]);

  useEffect(() =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

//   const watches = [
//     {
//         "id": 1,
//         "name": "Apple Watch Series 9",
//         "price": 399.99
//     },
//     {
//         "id": 2,
//         "name": "Samsung Galaxy Watch 5",
//         "price": 279.99
//     },
//     {
//         "id": 3,
//         "name": "Fitbit Sense 2",
//         "price": 299.95
//     },
//     {
//         "id": 4,
//         "name": "Garmin Venu 2",
//         "price": 399.99
//     },
//     {
//         "id": 5,
//         "name": "Amazfit Bip U Pro",
//         "price": 69.99
//     }
// ]


  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key = {watch.id} watch = {watch}></Watch>)
      }

    </>
  )
}

export default App

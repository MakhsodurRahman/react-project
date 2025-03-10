
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';

function App() {

  const [totalCoin,setCoin] = useState(0);

  const handleSetCoin = (coin) =>{
    console.log(coin)
    setCoin(totalCoin + coin);
  }
  return (
    <>
      <Header totalCoin ={totalCoin}></Header>
      <div className='mx-auto max-w-6xl'>
        <Banner handleSetCoin={handleSetCoin}></Banner>
      </div>
    </>
  )
}

export default App

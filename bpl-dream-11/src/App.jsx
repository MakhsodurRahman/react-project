
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import Players from './components/Players/Players';
import Player from './components/Player/Player';
import SelectedPlayer from './components/Header/SelectedPlayer/SelectedPlayer';
import ActiveTab from './components/ActiveTab/ActiveTab';

function App() {

  const [totalCoin,setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState('Available'); // Initialize with 'Available'

  const handleSetCoin = (coin) =>{
    setCoin(totalCoin + coin);
  }

  const handleSelectedPlayer = (player) =>{
    if(selectedPlayers.length != 6){
      if(player.price > totalCoin){
        alert('more coin needed')
      }else{
        setSelectedPlayers([...selectedPlayers,player])
        setCoin(totalCoin - player.price)
        alert(`${player.name } add your team`)
      }
    }else{
      alert('6 item added')
    }
  }
  return (
    <>
      <Header totalCoin ={totalCoin}></Header>
      <div className='mx-auto max-w-6xl'>
        <Banner handleSetCoin={handleSetCoin}></Banner>
        <div className='flex justify-between'>
          <div>
            {activeTab === 'Available' && (
          <h2 className="font-bold mt-4">Available Players</h2>
            )}

            {activeTab === 'Selected' && (
            <h2 className="font-bold mt-4">Selected Players({selectedPlayers.length}/6)</h2>
            )}
          </div>
          <ActiveTab activeTab={activeTab} setActiveTab={setActiveTab} playearLength={selectedPlayers.length} ></ActiveTab>
        </div>
        {activeTab === 'Available' && (
        <Players handleSelectedPlayer={handleSelectedPlayer}></Players>
      )}

      {activeTab === 'Selected' && (
        <SelectedPlayer selectedPlayers={selectedPlayers}></SelectedPlayer>
      )}
      </div>
    </>
  )
}

export default App

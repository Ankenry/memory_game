import React, { useState } from 'react';
import Cards from './components/Cards';

function App() {
  const [playerName, setPlayerName] = useState("");
  const [startTime, setStartTime] = useState(0);

  const handleStartGame = () => {
    setPlayerName(prompt("Your Name:"));
    setStartTime(Date.now());
  };

  const handleGameFinish = () => {
    const endTime = Date.now();
    const gameTime = Math.round((endTime - startTime) / 1000);
    alert(`Chơi xong trong ${gameTime} giây`);
  };

  return (
    <div className="App">
      <h1>Memory Game - React</h1>
      {playerName === "" ? (
        <button onClick={handleStartGame}>Start game</button>
      ) : (
        <>
          <h2>Người chơi: {playerName}</h2>
          <Cards onGameFinish={handleGameFinish} />
        </>
      )}
    </div>
  );
}

export default App;
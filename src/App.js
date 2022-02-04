import { useState } from 'react';

function App() {
  const [cardSelected, setSelectedCart] = useState(null);
  let cards = []
  
  for(let i = 0; i < 4; i++) { //el 4 se corresponde con el valor de la props que recibía el componente en el ejercicio original
    cards.push({id: i})
  }
  
  const handleClick = (id) => {
    setSelectedCart(id)
  }

  return (
    <div className="App">
      {
        cards.map((card) => {
          const {id} = card;
          return (
            <div key={id} onClick={() => handleClick(id)} className={cardSelected === id && 'isSelected'}>
              {cardSelected !== id ? "down" : "up"}
            </div>
          )}
        )
      }
    </div>
  );
}

export default App;

import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Coin from './components/Coin'

function App() {

  const [coinList, setCoinList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {

    axios.get("https://api.coinstats.app/public/v1/coins")
        .then(res => setCoinList(res.data.coins))
        .catch(err => console.log(err))

  }, [])


  //Írunk egy függvényt, amely megnézi a coinList tömbben tárolt elemek között, hogy szerepel-e az amit az input mezőbe beírok
  const searchedCoin = coinList.filter(coin => {

      return coin.name.toLowerCase().includes(search.toLowerCase());
      //coinList tömbben tárolt apiból kijövő valuták közül egyezik-e valamelyik az input mezőből kijövő értékkel
  })

  return (
    <div>
        <div className="crypto-header">
          <h1>Kriptovaluta Kereső</h1>

          <input type="text" placeholder="Bitcoin..." onChange={(e) => {

            setSearch(e.target.value)

          }} />
        </div>

        <div className="crypto-container">
          {

            searchedCoin.map(coin => {

              return <Coin name={coin.name} price={coin.price} symbol={coin.symbol} icon={coin.icon} />
            })
          }
        </div>


    </div>
  );
}

export default App;

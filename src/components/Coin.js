import React from 'react'
import styled from 'styled-components'
import './Coin.css'

const CoinContainer = styled.div`

    height: 300px;
    width: 400px;
    background: #f0f0f0;
    margin-bottom: 20px;
    border-radius: 10px;
    text-align: center;
    padding: 8px 0;
    box-shadow: 0 3px 8px rgba(0,0,0,0.2);
`;

const CoinImg = styled.img`

    width: 64px;
    height: 64px;
`;

const Button = styled.button`

    padding: 10px 25px;
    background: rgb(48,48,252);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #fff;

`;

const Coin = ({name, symbol, icon, price}) => {
  return (
    <CoinContainer>
        <h2>Név: {name}</h2>
        <CoinImg src={icon} alt={name} />
        <h3>Ár: {price*350} HUF</h3>
        <h3>Ikon: {symbol}</h3>
        <Button>Vétel</Button>
    </CoinContainer>
  )
}

export default Coin
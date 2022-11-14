import { useState, useEffect } from "react";
import axios from "axios"

import Header from "./Header";
import Main from './Main'

const App = () => {

  const [currency, setCurrency] = useState();
  const [rates, setRates] = useState([])

  useEffect(() => {
    axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(res => {
      const result = [...res.data.filter(({ ccy }) => ccy === "USD" || ccy === "EUR")]
      setCurrency(result)
    })
  }, []);

  useEffect(() => {
    axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then(response => {
      const result = [...response.data.filter(({cc}) => cc === "USD" || cc === "EUR"), { txt: 'Гривня', rate: 1, cc: 'UAH' }]
      setRates(result)
    })
  }, [])
  
  return (
    <div>
      <Header currency={currency} />
      <Main rates={rates}/>
    </div>
  );
};

export default App;

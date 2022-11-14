/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import styles from './Main.module.css'
import sprite from "../../images/sprite.svg";

import CurrencyInput from "../CurrencyInput";
import { useState, useEffect } from "react"

const Main = ({ rates }) => {

    const [amountFrom, setAmountFrom] = useState(1);
    const [amountTo, setAmountTo] = useState(1);
    const [currencyFrom, setCurrencyFrom] = useState('UAH');
    const [currencyTo, setCurrencyTo] = useState('USD');

      useEffect(() => {
        if (!!rates) {
            handleAmountFromChange(1);
            handleAmountToChange(1)
          } 
      }, [rates, handleAmountToChange, handleAmountFromChange])

    const handleAmountFromChange = (amountFrom) => {
        const value1 = rates.filter(({ cc }) => cc === currencyTo);
        const value2 = rates.filter(({ cc }) => cc === currencyFrom);
        setAmountTo(amountFrom * value2[0]?.rate / value1[0]?.rate);
        setAmountFrom(amountFrom);
    }

    const handleCurrencyFromChange = (currencyFrom) => {
        const value1 = rates.filter(({ cc }) => cc === currencyTo);
        const value2 = rates.filter(({ cc }) => cc === currencyFrom);
        setAmountTo(amountFrom * value2[0]?.rate / value1[0]?.rate)
        setCurrencyFrom(currencyFrom)
    }

    const handleAmountToChange = (amountTo) => {
        const value1 = rates.filter(({ cc }) => cc === currencyTo);
        const value2 = rates.filter(({ cc }) => cc === currencyFrom);
        setAmountFrom((amountTo * value1[0]?.rate / value2[0]?.rate).toFixed(2))
        setAmountTo(amountTo)
    }

    const handleCurrencyToChange = (currencyTo) => {
        const value1 = rates.filter(({ cc }) => cc === currencyTo);
        const value2 = rates.filter(({ cc }) => cc === currencyFrom);
        setAmountFrom((amountTo * value1[0]?.rate / value2[0]?.rate).toFixed(2))
        setCurrencyTo(currencyTo)
    }
    
    return (
        <main>
            <div className={styles.wrapper}>
                <a href='/'>
                    <svg className={styles.log__icon}>
                        <use href={sprite + "#icon-bank"}></use>
                    </svg>
                </a>
            <h2 className={styles.title}>Exchanger at the rate of the National Bank of Ukraine</h2>
            </div>
            <CurrencyInput
                onAmountChange={handleAmountFromChange}
                onCurrencyChange={handleCurrencyFromChange}
                currencies={rates?.map(({ cc }) => cc)}
                amount={amountFrom}
                currency={currencyFrom}
            />
            <CurrencyInput
                onAmountChange={handleAmountToChange}
                onCurrencyChange={handleCurrencyToChange}
                currencies={rates?.map(({ cc }) => cc)}
                amount={amountTo}
                currency={currencyTo}
            />
        </main>
    );
};

export default Main;
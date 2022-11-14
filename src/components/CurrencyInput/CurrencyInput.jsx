import PropTypes from "prop-types";
import styles from './CurrencyInput.module.css'

const CurrencyInput = (props) => {
    return (
        <div className={styles.group}>
            <input type="text" value={props.amount} onChange={e => props.onAmountChange(e.currentTarget.value)}/>
            <select value={props.currency} onChange={e => props.onCurrencyChange(e.currentTarget.value)}>
                {props.currencies?.map(currency => (
                    <option value={currency} key={currency}>{currency}</option>
                ))}
            </select>
        </div>
    );
}

CurrencyInput.propTypes = {
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}

export default CurrencyInput;
import PropTypes from "prop-types";
import styles from './Header.module.css'
import sprite from "../../images/sprite.svg";

const Header = ({ currency }) => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.logo__wrapper}>
                <a href='/'>
                    <svg className={styles.log__icon}>
                        <use href={sprite + "#icon-bank"}></use>
                    </svg>
                </a>
                <h1 className={styles.logo__description}>The current exchange rate in Privatbank</h1>
            </div>
            <div>
                <ul className={styles.rates__list}>
                    {currency?.map(({ buy, sale, ccy, base_ccy }) =>
                    
                    
                        <li key={ccy} className={styles.rates__item}>

                            {ccy === "USD" ? <svg className={styles.icon}>
                                <use href={sprite + "#icon-united-states-flag-icon"} />
                            </svg> : <svg className={styles.icon}>
                                <use href={sprite + "#icon-europe-flag-icon"} />
                            </svg>}

                            <p className={styles.rates__text}><b>{ccy === "USD" ? "Dollar to hryvnia" : "Euro to hryvnia"} ({"Buy/Sale"})</b></p>
                            <p className={styles.rates__text}>1 {ccy} = {buy} {base_ccy} / {sale} {base_ccy} </p>
                        </li>
                    )}
                </ul>
            </div>
        </header >
    );
};

Header.propTypes = {
    currency: PropTypes.arrayOf(
        PropTypes.shape({
            buy: PropTypes.string,
            sale: PropTypes.string,
            ccy: PropTypes.string,
            base_ccy: PropTypes.string,
        }).isRequired
    ),
};

export default Header;
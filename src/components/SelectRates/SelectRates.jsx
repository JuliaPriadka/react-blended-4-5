import Select from 'react-select';
import { useDispatch } from 'react-redux';
import symbols from './symbols.json';
import styles from './SelectRates.module.css';
import './ReactSelect.css';
import { setBaseCurrency } from 'reduxState/currencySlice';

export const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();
  const handleChange = ({ value }) => {
    dispatch(setBaseCurrency(value));
  };
  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        options={symbols}
        isSearchable
        onChange={handleChange}
      />
    </div>
  );
};

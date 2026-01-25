import styles from './InputField.module.css'
import cn from 'classnames'

function InputField({ placeholder, icon, inputData, setInputData }) {
  const inputChangeHandler = (e) => {
    setInputData(e.target.value)
  }

  return (
    <div className={styles.search}>
      <input
        className={cn(styles['input-field'], {
          [styles['input-field_icon']]: icon
        })}
        onChange={inputChangeHandler}
        value={inputData}
        type='text'
        name=''
        id=''
        placeholder={placeholder}
      />
      {icon && (
        <img
          className={styles['search-icon']}
          src='/public/search.svg'
          alt=''
        />
      )}
    </div>
  )
}

export default InputField

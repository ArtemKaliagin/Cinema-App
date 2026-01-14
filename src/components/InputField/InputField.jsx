import { useState } from 'react'
import Button from '../Button/Button'
import styles from './InputField.module.css'
import cn from 'classnames'

function InputField({ placeholder, icon }) {
  const [inputData, setInputData] = useState('')

  const inputChangeHandler = (e) => {
    setInputData(e.target.value)
  }

  const applyButtonHandler = () => {
    console.log(inputData)
    setInputData('')
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
      <Button text={'Искать'} onClick={applyButtonHandler} />
    </div>
  )
}

export default InputField

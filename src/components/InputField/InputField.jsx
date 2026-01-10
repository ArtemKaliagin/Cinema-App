import { useState } from 'react'
import Button from '../Button/Button'
import './InputField.css'

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
    <div className='search'>
      <input
        className={icon ? 'input-field input-field_icon' : 'input-field'}
        onChange={inputChangeHandler}
        value={inputData}
        type='text'
        name=''
        id=''
        placeholder={placeholder}
      />
      {icon && <img className='search-icon' src='/public/search.svg' alt='' />}
      <Button text={'Искать'} onClick={applyButtonHandler} />
    </div>
  )
}

export default InputField

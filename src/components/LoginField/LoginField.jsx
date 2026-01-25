import { useState } from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import InputField from '../InputField/InputField'

import styles from './LoginField.module.css'

function LoginField() {
  const [inputData, setInputData] = useState('')

  const applyButtonHandler = () => {
    console.log(inputData)
    setInputData('')
  }

  return (
    <>
      <Heading heading={'Войти'} />
      <div className={styles.loginField}>
        <InputField
          icon={false}
          placeholder={'Ваше имя'}
          inputData={inputData}
          setInputData={setInputData}
        />
        <Button text={'Войти в профиль'} onClick={applyButtonHandler} />
      </div>
    </>
  )
}

export default LoginField

import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import InputField from '../InputField/InputField'

import styles from './LoginField.module.css'

function LoginField() {
  const [inputData, setInputData] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('userInfo'))
    if (res) {
      setInputData(res.name)
      setIsLogin(res.isLogined)
    }
  }, [])

  const applyButtonHandler = () => {
    const userInfo = {
      name: inputData,
      isLogined: true
    }

    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    setIsLogin(true)
    console.log(inputData)
    setInputData('')
  }

  return (
    <>
      {isLogin && <p>Залогинен</p>}
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

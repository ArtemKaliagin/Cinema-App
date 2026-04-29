import { useState } from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import InputField from '../InputField/InputField'
import Paragraph from '../Paragraph/Paragraph'

import styles from './FindFilmInput.module.css'

function FindFilmInput() {
  const [inputData, setInputData] = useState('')

  const applyButtonHandler = () => {
    console.log(inputData)
    setInputData('')
  }

  return (
    <>
      <Heading heading={'Поиск'} />
      <Paragraph />
      <div className={styles.findFilm}>
        <InputField
          icon={true}
          placeholder={'Введите название'}
          inputData={inputData}
          setInputData={setInputData}
        />
        <Button text={'Искать'} onClick={applyButtonHandler} />
      </div>
    </>
  )
}

export default FindFilmInput

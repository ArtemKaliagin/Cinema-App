import styles from './Button.module.css'

function Button({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} className={styles['main-button']}>
        {text}
      </button>
    </>
  )
}

export default Button

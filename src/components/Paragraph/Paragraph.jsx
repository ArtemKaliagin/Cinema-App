import cn from 'classnames'
import styles from './Paragraph.module.css'

function Paragraph() {
  return (
    <>
      <p className={cn(styles['paragraph'], styles['paragraph_small'])}>
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </p>
    </>
  )
}

export default Paragraph

import FilmCard from '../FilmCard/FilmCard'
import styles from './FilmsList.module.css'

function FilmList({ filmsData }) {
  return (
    <div className={styles['films-list']}>
      {filmsData.map((item) => (
        <FilmCard
          key={item.id}
          name={item.name}
          likes={item.likes}
          img={item.img}
        />
      ))}
    </div>
  )
}

export default FilmList

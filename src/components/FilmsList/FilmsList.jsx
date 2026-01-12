import FilmCard from '../FilmCard/FilmCard'
import './FilmsList.css'

function FilmList({ filmsData }) {
  return (
    <div className='films-list'>
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

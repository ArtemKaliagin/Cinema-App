import './FilmCard.css'

function FilmCard({ name, img, likes }) {
  return (
    <div className='film-card'>
      <btn type='button' className='film-card__favs-btn'>
        <img
          className='film-card__favs-icon'
          src='/public/FilmCardIcons/Vector.svg'
          alt='star'
        />
        <span className='film-card__favs-text'>{likes}</span>
      </btn>
      <img className='film-card__img' src={img} alt={name} />

      <div className='film-card__headingANDadd'>
        <h2 className='film-card__heading'>{name}</h2>
        <div className='film-card__add-to-favs'>
          <img
            className='film-card__add-to-favs__icon'
            src='/public/FilmCardIcons/like.svg'
            alt='like'
          />
          <p className='film-card__add-to-favs__text'>Избранное</p>
        </div>
      </div>
    </div>
  )
}

export default FilmCard

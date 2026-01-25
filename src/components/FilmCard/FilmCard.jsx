import styles from './FilmCard.module.css'

function FilmCard({ name, img, likes }) {
  return (
    <div className={styles['film-card']}>
      <button type='button' className={styles['film-card__favs-btn']}>
        <img
          className={styles['film-card__favs-icon']}
          src='/public/FilmCardIcons/Vector.svg'
          alt='star'
        />
        <span className={styles['film-card__favs-text']}>{likes}</span>
      </button>
      <img className={styles['film-card__img']} src={img} alt={name} />

      <div className={styles['film-card__headingANDadd']}>
        <h2 className={styles['film-card__heading']}>{name}</h2>
        <div className={styles['film-card__add-to-favs']}>
          <img
            className={styles['film-card__add-to-favs__icon']}
            src='/public/FilmCardIcons/like.svg'
            alt='like'
          />
          <p className={styles['film-card__add-to-favs__text']}>Избранное</p>
        </div>
      </div>
    </div>
  )
}

export default FilmCard

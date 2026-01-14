import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles['nav-bar']}>
      <img src='/public/Bookmark.svg' alt='' />
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>
          <a href='#' className={styles['nav-link']}>
            Поиск фильмов
          </a>
        </li>
        <li className={styles['nav-item']}>
          <a href='#' className={styles['nav-link']}>
            Мои фильмы
          </a>
        </li>
        <li className={styles['nav-item']}>
          <a href='#' className={styles['nav-link']}>
            Войти
          </a>
          <img
            className={styles['nav-item-img']}
            src='/public/Exit.svg'
            alt=''
          />
        </li>
      </ul>
    </div>
  )
}

export default NavBar

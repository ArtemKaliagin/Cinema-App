import './NavBar.css'

function NavBar() {
  return (
    <div className='nav-bar'>
      <img src='/public/Bookmark.svg' alt='' />
      <ul className='nav-list'>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Поиск фильмов
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Мои фильмы
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Войти
          </a>
          <img className='nav-item-img' src='/public/Exit.svg' alt='' />
        </li>
      </ul>
    </div>
  )
}

export default NavBar

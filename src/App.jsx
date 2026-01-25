import './App.css'
import FilmList from './components/FilmsList/FilmsList'
import FindFilmInput from './components/FindFilmInput/FindFilmInput'
import LoginField from './components/LoginField/LoginField'
import FILM_DATA from './data/DATA'
import NavBar from './layout/NavBar/NavBar'

function App() {
  return (
    <div className='container'>
      <NavBar />
      <LoginField />
      <FindFilmInput />

      <FilmList filmsData={FILM_DATA} />
    </div>
  )
}

export default App

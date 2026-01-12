import './App.css'
import FilmList from './components/FilmsList/FilmsList'
import Heading from './components/Heading/Heading'
import InputField from './components/InputField/InputField'
import Paragraph from './components/Paragraph/Paragraph'
import FILM_DATA from './data/DATA'
import NavBar from './layout/NavBar/NavBar'

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Heading />
      <Paragraph />
      <InputField icon={true} placeholder={'Введите название'} />

      <FilmList filmsData={FILM_DATA} />
    </div>
  )
}

export default App

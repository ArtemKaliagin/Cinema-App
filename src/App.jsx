import './App.css'
import Heading from './components/Heading/Heading'
import InputField from './components/InputField/InputField'
import Paragraph from './components/Paragraph/Paragraph'
import NavBar from './layout/NavBar/NavBar'

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Heading />
      <Paragraph />

      <InputField icon={true} placeholder={'Введите название'} />
    </div>
  )
}

export default App

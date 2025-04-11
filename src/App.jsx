import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './pages/Home';
import Header from './components/Header';
import "./assets/scss/theme_style.scss"
import "../style.css"

function App() {
  return (
    <>
      <div>
      <Header/>
      <Home/>
        
      </div>
      
    </>
  )
}

export default App

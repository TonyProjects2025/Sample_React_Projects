import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Banner from './components/Banner';
import Header from './components/Header';
import "./assets/scss/theme_style.scss"
import "../style.css"

function App() {
  return (
    <>
      <div>
      <Header/>
       <Banner/>
        
      </div>
      
    </>
  )
}

export default App

import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'
  const homeImageURL = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
  const homeTextClassName = isDarkTheme ? 'home-text-light' : 'home-text-dark'

  return (
    <div className={`home-app-container ${homeBgClassName}`}>
      <Navbar />
      <div className="home-page-container">
        <div className="home-container">
          <img className="home-image" src={homeImageURL} alt="home" />
          <h1 className={`home-heading ${homeTextClassName}`}>Home</h1>
        </div>
      </div>
    </div>
  )
}

export default Home

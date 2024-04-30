import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const notFoundBgClassName = isDarkTheme
    ? 'not-found-bg-dark'
    : 'not-found-bg-light'
  const notFoundHeadingTextClassName = isDarkTheme
    ? 'not-found-text-dark'
    : 'not-found-text-light'
  const notFoundContentTextClassName = isDarkTheme
    ? 'not-found-content-dark'
    : 'not-found-content-light'

  return (
    <div className={`not-found-app-container ${notFoundBgClassName}`}>
      <Navbar />
      <div className="not-found-content">
        <img
          className="not-found-image"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <h1 className={`not-found-heading ${notFoundHeadingTextClassName}`}>
          Lost Your Way?
        </h1>
        <p className={`not-found-text ${notFoundContentTextClassName}`}>
          We cannot seem to find the page you are looking for.
        </p>
      </div>
    </div>
  )
}

export default NotFound

import React, {Component} from 'react'
import './Sidebar.scss';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked})
    }
render() {
  return (
    <div>
        <header className="header" id="header">
            <div className='header__toggle' onClick={this.handleClick}>
            <div>
            <img  className={this.state.clicked ? 'move' : "back"} src={this.state.clicked ? "./assets/interface-delete-1.svg": "./assets/interface-setting-menu-1.svg" }id='header-toggle' alt='icon'></img>
            </div>
            </div>
        </header>
        <div  id="nav-bar" className={this.state.clicked ? 'show' : 'navbar'}>
            <nav className='nav'>
                <div>
                    <Link to='/' className='nav__logo'>
                        <img className="nav__logo-icon" src='./assets/interface-home-3.svg' alt='icon'></img>
                        <span className="nav__logo-name">DN</span>
                    </Link>
                    <div className="nav-list">
                    <Link to='/aboutme' className='nav__logo'>
                            <img className='nav__icon' src='./assets/interface-user-single.svg' alt='icon'></img>
                            <span className='nav__name'>About Me</span>
                    </Link>
                    <Link to='/resume' className='nav__logo'>
                            <img className='nav__icon' src='./assets/shopping-bag-suit-case.svg' alt='icon'></img>
                            <span className='nav__name'>Resume</span>
                    </Link>
                    <Link to='/projects' className='nav__logo'>
                            <img className='nav__icon' src='./assets/interface-file-folder.svg' alt='icon'></img>
                            <span className='nav__name'>Projects</span>
                    </Link>
                    <Link to='/contact' className='nav__logo'>
                            <img className='nav__icon' src='./assets/mail-send-email.svg' alt='icon'></img>
                            <span className='nav__name'>Contact</span>
                    </Link>
                    </div>
                </div>
                <a href='#' className='nav__link'>
                            <img  className="nav__icon"src='./assets/computer-logo-linkedin.svg' alt='icon'></img>
                            <span className='nav__name'>Dominick Nitecki</span>
                        </a>    
            </nav>
        </div>
    </div>
    
  )
}
}
export default Sidebar
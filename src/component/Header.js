import React from 'react';
import {ReactComponent as Logo} from '../assets/desktop/logo.svg'
import {ReactComponent as SunIcon} from '../assets/desktop/icon-sun.svg'
import {ReactComponent as MoonIcon} from '../assets/desktop/icon-moon.svg'
import { Link } from 'react-router-dom';

function Header({ theme, changeTheme }) {
    const sliderClassname = `theme-toggler__slider ${theme === 'light' ? 'theme-toggler__slider--sun' : 'theme-toggler__slider--moon'}`

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/"><Logo className="header__logo" /></Link>
                <div className="theme-toggler">
                    <SunIcon />
                    <div onClick={changeTheme} className={sliderClassname} />
                    <MoonIcon />
                </div>
            </div>
        </header>
    )
}

export default Header;
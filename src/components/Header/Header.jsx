import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'



const Header = (props) => {
    return <header className={classes.header}>
        <div className={classes.logo}>
            <img src="https://js.wiki/img/heroku.5f6d6912.svg" />
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out </button> </div>
                    : <NavLink to={'/Login'}>Login</NavLink>}
            </div>
        </div>
    </header>;
}


export default Header;
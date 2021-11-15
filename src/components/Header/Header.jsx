import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.png";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} />
            </div>

            <div className={classes.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {props.login} - <button onClick={props.logout}>Log out </button>{" "}
                    </div>
                ) : (
                    <NavLink to={"/Login"}>Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;

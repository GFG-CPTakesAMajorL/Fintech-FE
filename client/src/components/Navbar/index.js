import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/auth";

const Navbar = (props) => {
    const { token, menubuttons, setLocation } = props;
    const handleLogout = () => {
        props.dispatch(logoutUser(props.token));
        console.log('logged out');
    }
    return (
        <div className={styles["navbar"]}>
            {
                token !== null ?
                    <>
                        <Link to="/home" className={styles['link']}>
                            <span className={styles["logo"]}>Ethan Data Refinery</span>
                        </Link>
                        <Link to="/home" className={styles['link']}>
                            <span className={styles["nav"]}>My Files</span>
                        </Link>
                        <Link to="/mytemplates" className={styles['link']}>
                            <span className={styles["nav"]}>My Templates</span>
                        </Link>
                        <Link to="/about" className={styles['link']}>
                            <span className={styles["nav"]}>About</span>
                        </Link>
                        <Link to="/help" className={styles['link']}>
                            <span className={styles["nav"]}>Help</span>
                        </Link>
                        <button className={styles['link']} onClick={handleLogout}>
                            <span className={styles["nav"]}>LogOut</span>
                        </button>
                        {menubuttons === false ? null : (
                            <>
                                <button
                                    className={styles['files-btn']}
                                    onClick={() => setLocation(1)}
                                >Load Files From Local Machine</button>
                                <button
                                    className={styles['files-btn']}
                                    onClick={() => setLocation(0)}
                                >Load Files From AWS S3</button>
                            </>
                        )}
                    </> :
                    <>
                        <Link to="/home" className={styles['link']}>
                            <span className={styles["logo"]}>Ethan Data Refinery</span>
                        </Link>
                        <Link to="/" className={styles['link']}>
                            <span className={styles["nav"]}>Signup</span>
                        </Link>
                        <Link to="/login" className={styles['link']}>
                            <span className={styles["nav"]}>Login</span>
                        </Link>
                    </>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Navbar);

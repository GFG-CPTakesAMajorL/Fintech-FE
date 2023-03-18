import { Link } from 'react-router-dom'
import styles from './Auth.module.css'

const LoginComponent = ({ username, password, handleChange, handleSubmit }) => {
    return (
        <div className={styles['container']} >
            <form className={styles['form']} onSubmit={handleSubmit}>
                <span className={styles['header']}>Login</span>
                <input
                    className={styles['input']}
                    type="text"
                    name='username'
                    value={username}
                    onChange={handleChange}
                    placeholder='Username'
                />
                <input
                    className={styles['input']}
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder='Password'
                />
                <input className={styles['btn']} type="submit" value='Login' />
            </form>
            <Link className={styles['redirect']} to='/'>
                Not a user? Signup Today!
            </Link>
        </div >
    )
}

export default LoginComponent
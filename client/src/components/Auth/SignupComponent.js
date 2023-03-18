import styles from './Auth.module.css'
import { Link } from 'react-router-dom'

const SignupComponent = ({ username, email, password, password2, handleChange, handleSubmit }) => {
    return (
        <div className={styles['container']}>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <span className={styles['header']}>Signup</span>
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
                    type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder='Email'
                />
                <input
                    className={styles['input']}
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder='Password'
                />
                <input
                    className={styles['input']}
                    type="password"
                    name='password2'
                    value={password2}
                    onChange={handleChange}
                    placeholder='Confirm Password'
                />
                <input className={styles['btn']} type="submit" value='Sign Up' />
            </form>
            <Link className={styles['redirect']} to='/login'>
                Already a user? Login
            </Link>
        </div>
    )
}

export default SignupComponent
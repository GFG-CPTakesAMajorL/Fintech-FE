import { useState } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router"
import LoginComponent from "../components/Auth/LoginComponent"
import Navbar from '../components/Navbar'
import { loginUser } from "../redux/actions/auth"

const Login = (props) => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/home')
    }
    const [user, setUser] = useState({
        username: '', password: ''
    })
    const { username, password } = user;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('Incomplete credentials!')
            return;
        }
        props.dispatch(loginUser(username, password, redirect))
    }

    return (
        <>
            <Navbar />
            <LoginComponent
                username={username}
                password={password}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Login)
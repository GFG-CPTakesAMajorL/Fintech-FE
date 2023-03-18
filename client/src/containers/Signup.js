import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import SignupComponent from "../components/Auth/SignupComponent"
import Navbar from '../components/Navbar'
import { signupUser } from "../redux/actions/auth";

const Signup = (props) => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/home')
    }
    const [user, setUser] = useState({
        username: '', email: '', password: '', password2: ''
    })
    const { username, email, password, password2 } = user;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password || !password2) {
            alert('Incomplete credentials!')
            return;
        } else if (password !== password2) {
            alert("Passwords don't match")
            return;
        }
        props.dispatch(signupUser(username, email, password, redirect))
    }
    return (
        <>
            <Navbar />
            <SignupComponent
                username={username}
                email={email}
                password={password}
                password2={password2}
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

export default connect(mapStateToProps)(Signup)
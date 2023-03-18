import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

const InvertedPrivateRoute = ({ auth }) => {
    return auth.token ? <Navigate to='/home' /> : <Outlet />
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(InvertedPrivateRoute)
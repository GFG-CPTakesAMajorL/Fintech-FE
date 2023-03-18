import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = ({ auth }) => {
    return auth.token ? <Outlet /> : <Navigate to='/login' />
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)